import { Metadata } from "next";
import SignUpForm from "./SignUpForm";
import Link from "next/link";
import WithLayout from "@/components/with-layout/layout";

export const metadata: Metadata = {
  title: "Ro'yxatdan o'tish | Learnify",
  description:
    "Learnify platformasida ro'yxatdan o'ting va professional kurslar, ekspert o'qituvchilar va sertifikatlar dasturlariga kirish imkoniyatiga ega bo'ling.",
  keywords: [
    "ro'yxatdan o'tish",
    "hisob yaratish",
    "learnify",
    "onlayn ta'lim",
    "professional kurslar",
  ],
  openGraph: {
    title: "Learnify - Hisobingizni yarating",
    description:
      "Learnify bilan o'quv sayohatingizni boshlang. Ekspert o'qituvchilar tomonidan o'qitiladigan kurslarga kiring.",
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
