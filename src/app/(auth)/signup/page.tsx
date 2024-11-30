import { Metadata } from "next";
import SignUpForm from "./SignUpForm";
import Link from "next/link";
import WithLayout from "@/components/with-layout/layout";

export const metadata: Metadata = {
  title: "Create Account | Learnify",
  description:
    "Join Learnify to access premium professional courses, expert-led training, and certification programs. Start your professional development journey today.",
  keywords: [
    "sign up",
    "create account",
    "register",
    "learnify",
    "online learning",
    "professional courses",
  ],
  openGraph: {
    title: "Join Learnify - Create Your Account",
    description:
      "Start your learning journey with Learnify. Access expert-led courses and certification programs.",
    type: "website",
  },
};

export default function SignUpPage() {
  return (
    <WithLayout>
      <main className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900">
        <div className="w-full max-w-md">
          <div className="overflow-hidden rounded-xl bg-white shadow-xl dark:bg-gray-800">
            <div className="px-4 py-8 sm:px-8">
              <SignUpForm />
              <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link href="/signin" className="font-medium text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </WithLayout>
  );
}
