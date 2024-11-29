import { Metadata } from "next";
import SignUpForm from "./SignUpForm";

<<<<<<< HEAD
import Link from "next/link";
import WithLayout from "@/components/with-layout/layout";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import RegisterForm from "@/components/auth/RegisterForm";

const SignupPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { signIn } = useAuth();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/welcome");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <WithLayout>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Ro'yxatdan o'tish
                </h3>
                <p className="mb-11 text-base text-body-color dark:text-body-color-dark">
                  Ro'yxatdan o'tish uchun ma'lumotlaringizni kiriting
                </p>
                
                <RegisterForm />

                <p className="mt-8 text-center text-base text-body-color dark:text-body-color-dark">
                  Akkountingiz bormi?{" "}
                  <Link href="/signin" className="text-primary hover:underline">
                    Kirish
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WithLayout>
  );
=======
export const metadata: Metadata = {
  title: "Create Account | EduVerse",
  description: "Join EduVerse to access premium professional courses, expert-led training, and certification programs. Start your professional development journey today.",
  keywords: [
    "create account",
    "professional training",
    "expert courses",
    "certification",
    "skill development",
    "career growth",
    "EduVerse registration"
  ],
  openGraph: {
    title: "Create Your EduVerse Account",
    description: "Join the leading professional education platform. Access expert-led courses and advance your career.",
    type: "website",
    locale: "en_US",
    siteName: "EduVerse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Your EduVerse Account",
    description: "Join the leading professional education platform. Access expert-led courses and advance your career.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
>>>>>>> 76a98c542a3c4a118c927f0eb1bdca753e3b757b
};

export default function SignUpPage() {
  return (
    <SignUpForm />
  );
}
