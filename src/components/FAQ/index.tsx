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
    <div className="mb-6">
      <button
        onClick={onClick}
        className="flex w-full justify-between rounded-lg bg-gray-50 px-6 py-4 text-left transition-all hover:bg-gray-100 dark:bg-gray-800/60 dark:hover:bg-gray-800"
      >
        <h3 className="text-lg font-semibold text-black dark:text-white">
          {question}
        </h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="text-primary"
        >
          <svg
            className="h-6 w-6"
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
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeOut",
                },
                opacity: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.2,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.15,
                  ease: "easeInOut",
                },
              },
            }}
            className=" overflow-hidden rounded bg-gray-50/50 dark:bg-gray-800/30"
          >
            <div className="px-6 py-4">
              <p className="text-base font-medium leading-relaxed text-body-color">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  FAQ
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[42px]">
                  Tez-tez so'raladigan savollar
                </h2>
                <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                  Platformamiz haqida eng ko'p so'raladigan savollarga javoblar
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full px-4">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;
