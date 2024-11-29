import { UserType } from "@prisma/client";
import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      image?: string | null;
      userType?: UserType | null;
      phoneNumber?: string | null;
      needsOnboarding?: boolean;
    };
  }
}
