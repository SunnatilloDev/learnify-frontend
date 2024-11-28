"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

interface Feature {
  text: string;
  status: "active" | "inactive";
}

interface PricingPlan {
  packageName: string;
  monthlyPrice: string;
  yearlyPrice: string;
  subtitle: string;
  features: Feature[];
  isSpecial?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    packageName: "Bepul Tarif",
    monthlyPrice: "0",
    yearlyPrice: "0",
    subtitle: "O'quvchi va o'qituvchilar uchun boshlang'ich imkoniyatlar",
    features: [
      { text: "Cheklangan bepul kurslar", status: "active" },
      { text: "Asosiy kurs jarayonini kuzatish", status: "active" },
      { text: "Standart sifatli (SD) videolar", status: "active" },
      { text: "Jamiyat forumlariga kirish", status: "active" },
      { text: "Asosiy resurslar (PDF, hujjatlar)", status: "active" },
      { text: "Email orqali yordam", status: "active" },
      { text: "Bitta kurs yaratish (O'qituvchilar)", status: "active" },
      { text: "HD/4K video sifati", status: "inactive" },
      { text: "Tezkor yordam", status: "inactive" },
    ],
  },
  {
    packageName: "Plus Tarif",
    monthlyPrice: "9.99",
    yearlyPrice: "99.99",
    subtitle: "Qo'shimcha imkoniyatlarga ega bo'lgan o'rta tarif",
    features: [
      { text: "Barcha asosiy kurslar", status: "active" },
      { text: "HD video sifati", status: "active" },
      { text: "Tezkor mijozlarni qo'llab-quvvatlash", status: "active" },
      { text: "Interaktiv testlar", status: "active" },
      { text: "Kurs sertifikatlari", status: "active" },
      { text: "O'yin elementlari", status: "active" },
      { text: "5 tagacha kurs yaratish (O'qituvchilar)", status: "active" },
      { text: "70% daromad ulushi (O'qituvchilar)", status: "active" },
      { text: "4K video sifati", status: "inactive" },
    ],
  },
  {
    packageName: "Pro Tarif",
    monthlyPrice: "29.99",
    yearlyPrice: "299",
    subtitle: "Premium imkoniyatlarga ega to'liq kirish",
    features: [
      { text: "Barcha kurslarga to'liq kirish", status: "active" },
      { text: "Ultra HD (4K) video sifati", status: "active" },
      { text: "Tezkor va telefon orqali yordam", status: "active" },
      { text: "AI kurs tavsiyalari", status: "active" },
      { text: "Maxsus vebinarlar", status: "active" },
      { text: "Oflayn kurs ko'rish", status: "active" },
      { text: "Cheksiz kurs yaratish", status: "active" },
      { text: "80% daromad ulushi (O'qituvchilar)", status: "active" },
      { text: "VIP yordam va marketing", status: "active" },
    ],
  },
  {
    packageName: "Tashkilot Tarifi",
    monthlyPrice: "Maxsus",
    yearlyPrice: "Maxsus",
    subtitle: "Tashkilotlar uchun maxsus yechimlar",
    features: [
      { text: "Cheksiz kurslar va talabalar", status: "active" },
      { text: "Shaxsiy menejer", status: "active" },
      { text: "Maxsus brending", status: "active" },
      { text: "Oq yorliq imkoniyati", status: "active" },
      { text: "Korxona darajasidagi tahlillar", status: "active" },
      { text: "Maxsus API integratsiya", status: "active" },
      { text: "Ustuvor funksiyalar so'rovi", status: "active" },
      { text: "Yuqori xavfsizlik (SSO)", status: "active" },
      { text: "GDPR muvofiqlik", status: "active" },
    ],
  },
];

const Pricing: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Qulay va Hamyonbop Narxlar"
          paragraph="O'zingizga mos o'qish yoki o'qitish rejasini tanlang"
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Oylik
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yillik
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <PricingBox
              key={index}
              packageName={plan.packageName}
              price={isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
              duration={isMonthly ? "oy" : "yil"}
              subtitle={plan.subtitle}
            >
              {plan.features.map((feature, featureIndex) => (
                <OfferList
                  key={featureIndex}
                  text={feature.text}
                  status={feature.status}
                />
              ))}
            </PricingBox>
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
