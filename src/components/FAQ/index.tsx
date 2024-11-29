"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import faqsData from "./data";

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="mb-4 w-full rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {question}
        </h3>
        <svg
          className={`h-6 w-6 transform text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600 dark:text-gray-300">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-20 overflow-hidden pb-8 pt-20 lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
          <span className="mb-2 block text-lg font-semibold text-primary">
            FAQ
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-4xl md:text-[40px]">
            Ko'p so'raladigan savollar
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            Platformadan foydalanish bo'yicha eng ko'p so'raladigan savollarga javoblar
          </p>
        </div>

        <div className="mx-auto max-w-[800px]">
          {faqsData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
