import FAQPage from "@/components/FAQ/index";
import WithLayout from "@/components/with-layout/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Savol-javoblar",
  description: "Tez-tez so'raladigan savollar va ularga javoblar",
  // other metadata
};

const page = () => {
  return (
    <WithLayout>
    
      <FAQPage />
    </WithLayout>
  );
};

export default page;
