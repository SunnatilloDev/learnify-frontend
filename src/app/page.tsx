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
  title: "Online o'rganish",
  description: "Online o'rganish platformasi",
};

export default function Home() {
  return (
    <WithLayout>
      <ScrollUp />
      <AnimatedHome />
    </WithLayout>
  );
}
