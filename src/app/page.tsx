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
