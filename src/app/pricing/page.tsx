import Pricing from "@/components/Pricing";
import WithLayout from "@/components/with-layout/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online o'rganish",
  description:
    "Online talim olish, online o'rganish, online darslar, ilm olish, online ilm olish, masofaviy ta'lim",
};

export default function page() {
  return (
    <WithLayout>
        <Pricing />
    </WithLayout>
  );
}
