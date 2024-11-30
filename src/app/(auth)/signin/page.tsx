import { Metadata } from "next";
import SignInForm from "./SignInForm";
import WithLayout from "@/components/with-layout/layout";

export const metadata: Metadata = {
  title: "Tizimga kirish | Learnify",
  description:
    "Learnify hisobingizga kiring, kurslaringizga kiring, o'quv jarayoningizni kuzating va o'rganishni davom ettiring.",
  keywords: [
    "tizimga kirish",
    "kirish",
    "learnify",
    "onlayn ta'lim",
    "professional kurslar",
  ],
  openGraph: {
    title: "Learnify tizimiga kirish",
    description:
      "Shaxsiy o'quv panelingizga kiring va professional rivojlanish yo'lingizni davom ettiring.",
    type: "website",
  },
};

export default function SignInPage() {
  return (
    <WithLayout>
      <main className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900">
        <div className="w-full max-w-md">
          <div className="overflow-hidden rounded-xl bg-white shadow-xl dark:bg-gray-800">
            <div className="px-4 py-8 sm:px-8">
              <SignInForm />
            </div>
          </div>
        </div>
      </main>
    </WithLayout>
  );
}
