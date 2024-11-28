import ScrollUp from "@/components/Common/ScrollUp";
import WithLayout from "@/components/with-layout/layout";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => (
    <div className="min-h-screen opacity-0 transition-opacity duration-300">
      {/* This div maintains layout during load */}
    </div>
  ),
  ssr: false,
});

export const metadata: Metadata = {
  title: "FAQ - Savol-javoblar",
  description: "Tez-tez so'raladigan savollar va ularga javoblar",
  // other metadata
};

export default function page() {
  return (
    <WithLayout>
      <ScrollUp />
      <FAQ />
    </WithLayout>
  );
}
