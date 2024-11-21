import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import FAQ from "@/components/FAQ";
import AboutHero from "@/components/About/AboutHero";
import Goals from "@/components/Goals";
import WhatWeOffer from "@/components/WhatWeOffer";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/*<Breadcrumb pageName="Biz Haqimizda" description="" />*/}
      {/*<AboutSectionOne />*/}
      {/*<AboutSectionTwo />*/}
      <AboutHero />
      <Goals />
      <WhatWeOffer />
      <FAQ />
    </>
  );
};

export default AboutPage;
