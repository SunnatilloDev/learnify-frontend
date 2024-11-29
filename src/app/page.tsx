import ScrollUp from "@/components/Common/ScrollUp";
import WithLayout from "@/components/with-layout/layout";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const AnimatedHome = dynamic(() => import("@/components/Home/AnimatedHome"), {
  loading: () => (
    <div className="min-h-screen opacity-0 transition-opacity duration-300">
      {/* This div maintains layout during load */}
    </div>
  ),
  ssr: false,
});

export const metadata: Metadata = {
  title: "Eduverse - Online o'rganish platformasi | Masofaviy ta'lim",
  description:
    "Eduverse uz - O'zbekistonning eng yaxshi online ta'lim platformasi. Online talim olish, online o'rganish, online darslar, ilm olish, online ilm olish, masofaviy ta'lim imkoniyatlari.",
  keywords: [
    "online o'rganish",
    "online ta'lim",
    "masofaviy ta'lim",
    "online darslar",
    "eduverse",
    "o'zbekiston ta'lim platformasi",
  ],
  openGraph: {
    title: "Eduverse - Online o'rganish platformasi",
    description:
      "O'zbekistonning eng yaxshi online ta'lim platformasi",
    url: "https://eduverse.uz",
    siteName: "Eduverse",
    images: [
      {
        url: "https://eduverse.uz/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "uz_UZ",
  },
};

export default function Home() {
  return (
    <WithLayout>
      <ScrollUp />
      <AnimatedHome />
    </WithLayout>
  );
}
