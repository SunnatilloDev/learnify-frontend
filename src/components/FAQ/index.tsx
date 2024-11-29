"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
<<<<<<< HEAD
import PageWrapper from "../Common/PageWrapper";
=======
import faqsData from "./data";
>>>>>>> cd5f894c9731d8f057803b0085a1d3903e8e7319

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageWrapper>
      <section className="relative z-20 overflow-hidden pb-8 pt-20 lg:pb-[50px] lg:pt-[120px]">
        <div className="container">
          <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              FAQ
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Tez-tez so'raladigan savollar
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              Platformamiz haqida eng ko'p so'raladigan savollarga javoblar
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
<<<<<<< HEAD
              <div className="mx-auto max-w-[525px]">
                {faqs.map((faq, index) => (
=======
              <div className="mx-auto max-w-[800px]">
                {faqsData.map((faq, index) => (
>>>>>>> cd5f894c9731d8f057803b0085a1d3903e8e7319
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

        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="1308.65"
                y1="1142.58"
                x2="602.827"
                y2="-418.681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.36" />
                <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
                <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </PageWrapper>
  );
};

export default FAQPage;
