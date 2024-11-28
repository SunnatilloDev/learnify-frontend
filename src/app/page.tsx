import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import FAQ from "@/components/FAQ";
import Teachers from "@/components/Teachers/Teachers";
import WithLayout from "@/components/with-layout/layout";

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
      {/*<Video />*/}
      {/*<Brands />*/}
      <Teachers />
      {/*<Pricing />*/}
      {/*<AboutSectionOne />*/}
      {/*<AboutSectionTwo />*/}
      <Testimonials />
      {/*<Pricing />*/}
      {/*<Blog />*/}
      <Contact />
    </WithLayout>
  );
}
