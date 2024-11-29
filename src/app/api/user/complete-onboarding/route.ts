import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";
import { UserType } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Input validation schema
const updateUserSchema = z.object({
  userType: z.enum([UserType.TEACHER, UserType.STUDENT]),
  phoneNumber: z.string().min(1, "Phone number is required"),
});

export async function POST(request: Request) {
  try {
    // Get the session
    const session = await getServerSession(options);

    // Debug session
    console.log("Session in API:", session);

    if (!session?.user?.email) {
      console.log("No session or email found");
      return NextResponse.json(
        { message: "Avtorizatsiyadan o'tilmagan" },
        { status: 401 }
      );
    }

    // Parse and validate the request body
    const body = await request.json();
    const validatedData = updateUserSchema.parse(body);

    // Debug the update operation
    console.log("Updating user with data:", {
      email: session.user.email,
      ...validatedData,
    });

    // Update the user
    const user = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        userType: validatedData.userType,
        phoneNumber: validatedData.phoneNumber,
        updatedAt: new Date(),
      },
    });

    console.log("Updated user:", user);

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error in complete-onboarding:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Noto'g'ri ma'lumotlar kiritildi", errors: error.errors },
        { status: 400 }
      );
    }

    // Check if it's a Prisma error
    if (error instanceof Error && error.message.includes("Record to update not found")) {
      return NextResponse.json(
        { message: "Foydalanuvchi topilmadi" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Serverda xatolik yuz berdi" },
      { status: 500 }
    );
  }
}
