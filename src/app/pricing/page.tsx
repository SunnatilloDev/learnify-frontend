import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing page for premium",
};

export default function Home() {
  return <Pricing />;
}
