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
<<<<<<< HEAD
  title: "Online o'rganish",
  description: "Online o'rganish platformasi",
=======
  title: "Eduverse - Online o'rganish platformasi | Masofaviy ta'lim",
  description:
    "Eduverse uz - O'zbekistonning eng yaxshi online ta'lim platformasi. Online talim olish, online o'rganish, online darslar, ilm olish, online ilm olish, masofaviy ta'lim imkoniyatlari.",
  keywords: "Online o'rganish, Eduverse, Eduverse uz, talim olish, masofaviy ta'lim, online ta'lim, online darslar",
  openGraph: {
    title: "Eduverse - Online o'rganish platformasi | Masofaviy ta'lim",
    description: "Eduverse uz - O'zbekistonning eng yaxshi online ta'lim platformasi. Online talim olish, masofaviy ta'lim imkoniyatlari.",
    type: "website",
    locale: "uz_UZ",
  },
>>>>>>> cd5f894c9731d8f057803b0085a1d3903e8e7319
};

export default function Home() {
  return (
    <WithLayout>
      <ScrollUp />
      <AnimatedHome />
    </WithLayout>
  );
}
