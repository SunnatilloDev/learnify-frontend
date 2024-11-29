import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | EduVerse",
  description: "Access your EduVerse account. Continue your professional development journey with our expert-led courses and certification programs.",
  keywords: [
    "signin",
    "login",
    "eduverse",
    "education",
    "online learning"
  ],
  openGraph: {
    title: "Sign In to EduVerse",
    description: "Access your account on the leading professional education platform. Continue your learning journey.",
    type: "website",
    locale: "en_US",
    siteName: "EduVerse",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign In to EduVerse",
    description: "Access your account on the leading professional education platform. Continue your learning journey.",
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
