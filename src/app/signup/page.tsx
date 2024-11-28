import { Metadata } from "next";
import SignUpForm from "./SignUpForm";

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
};

export default function SignUpPage() {
  return (
    <SignUpForm />
  );
}
