import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { UserType } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const { name, email, password, userType, phoneNumber } = await req.json();

    // Validate the input
    if (!name || !email || !password || !userType || !phoneNumber) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate userType is a valid enum value
    if (!Object.values(UserType).includes(userType as UserType)) {
      return NextResponse.json(
        { error: "Invalid user type" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await hash(password, 12);

    // Create the user with credentials
    const user = await prisma.user.create({
      data: {
        name,
        email,
        userType: userType as UserType,
        phoneNumber,
        credentials: {
          create: {
            password: hashedPassword
          }
        }
      },
      include: {
        credentials: true
      }
    });

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
        userType: user.userType,
        phoneNumber: user.phoneNumber,
      },
    });
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Error creating user" },
      { status: 500 }
    );
  }
}
