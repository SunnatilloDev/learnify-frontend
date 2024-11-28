"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function WithLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
