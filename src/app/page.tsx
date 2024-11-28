import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Teachers from "@/components/Teachers/Teachers";
import Testimonials from "@/components/Testimonials";
import WithLayout from "@/components/with-layout/layout";
import TeacherCTA from "@/components/TeacherCTA";
import HowItWorks from "@/components/HowItWorks";
import WhyChoose from "@/components/WhyChoose";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online o'rganish",
  description:
    "Online talim olish, online o'rganish, online darslar, ilm olish, online ilm olish, masofaviy ta'lim",
};

export default function Home() {
  return (
    <WithLayout>
      <ScrollUp />
      <Hero />
      <Features />
      <HowItWorks />
      <WhyChoose />
      <TeacherCTA />
      {/*<Video />*/}
      {/*<Brands />*/}
      {/* <Teachers /> */}
      {/*<Pricing />*/}
      {/*<AboutSectionOne />*/}
      {/*<AboutSectionTwo />*/}
      {/* <Testimonials /> */}
      {/*<Pricing />*/}
      {/*<Blog />*/}
      <Contact />
    </WithLayout>
  );
}
