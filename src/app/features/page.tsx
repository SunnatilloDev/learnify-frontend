import ScrollUp from "@/components/Common/ScrollUp";
import WithLayout from "@/components/with-layout/layout";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const Features = dynamic(() => import("@/components/Features"), {
  loading: () => (
    <div className="min-h-screen opacity-0 transition-opacity duration-300">
      {/* This div maintains layout during load */}
    </div>
  ),
  ssr: false,
});

export const metadata: Metadata = {
  title: "Features - Learnify",
  description: "Explore all features of our learning platform",
};

export default function FeaturesPage() {
  return (
    <WithLayout>
      <ScrollUp />
      <section className="pb-8 pt-24 md:pb-16 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container">
          <div className="mx-auto mb-12 max-w-[800px] text-center lg:mb-20">
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Zamonaviy Ta'lim Imkoniyatlari
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
              EduVerse platformasi sizga eng ilg'or ta'lim texnologiyalari va innovatsion yechimlarni taqdim etadi. Har bir o'qituvchi va o'quvchi uchun maxsus ishlab chiqilgan imkoniyatlar orqali ta'lim jarayonini yangi bosqichga oling.
            </p>
          </div>
        </div>
      </section>
      <Features showAll />
    </WithLayout>
  );
}
