import { Metadata } from "next";
import SignUpForm from "./SignUpForm";
import Link from "next/link";
import WithLayout from "@/components/with-layout/layout";

export const metadata: Metadata = {
  title: "Create Account | EduVerse",
  description: "Join EduVerse to access premium professional courses, expert-led training, and certification programs. Start your professional development journey today.",
  keywords: [
    "sign up",
    "create account",
    "register",
    "eduverse",
    "online learning",
    "professional courses"
  ],
  openGraph: {
    title: "Join EduVerse - Create Your Account",
    description: "Start your learning journey with EduVerse. Access expert-led courses and certification programs.",
    type: "website",
  }
};

export default function SignUpPage() {
  return (
    <WithLayout>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <div className="w-full rounded-lg bg-white p-6 shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Create an Account
            </h2>
            <SignUpForm />
            <p className="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-medium text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </WithLayout>
  );
}
