"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mb-4 ml-5 border-b border-gray-300 pb-4 dark:border-gray-600"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3
        className="flex cursor-pointer items-center justify-between text-lg font-semibold text-gray-800 dark:text-gray-200"
        role="button"
      >
        {question}
        <ChevronDown
          className={`ml-4 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </h3>
      <div
        className={`mt-2 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="ml-1 text-base text-gray-600 dark:text-gray-500">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = ({ title, faqData }) => {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
        {title}
      </h2>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const FAQ = () => {
  const generalFAQ = [
    {
      question: "Platformamiz qanday ishlaydi?",
      answer:
        "Platformamiz har bir foydalanuvchi uchun ta'lim olamiga kirish imkonini beradi. Siz platformaga o‘quvchi yoki o‘qituvchi sifatida ro‘yxatdan o‘tishingiz mumkin. O‘quvchilar uchun platformamiz o‘z qiziqishlari va ehtiyojlariga mos kurslarni topish va sotib olish imkoniyatini taqdim etadi. Har bir kursga to‘lovni xavfsiz to‘lov tizimi orqali amalga oshirib, darhol darslarga kirish imkoniga ega bo‘lasiz. Kursni muvaffaqiyatli tugatganingizdan so‘ng, avtomatik ravishda sertifikat olasiz, bu esa bilimlaringizni tasdiqlashda qo‘l keladi.\n" +
        "\n" +
        "O‘qituvchilar uchun esa platformamiz bilim va tajribangizni kurslar orqali monetizatsiya qilish imkonini beradi. Ro‘yxatdan o‘tib, o‘z kurslaringizni yaratishingiz va yuklashingiz mumkin. Platforma sizga daromadni kuzatish, talabalar bilan muloqot qilish va kurslaringiz samaradorligini tahlil qilish imkoniyatini taqdim etadi. Har bir sotilgan kursdan daromad olishingiz mumkin bo‘ladi, va to‘lovlaringizni platformamiz orqali qulay tarzda boshqarishingiz mumkin.\n" +
        "\n",
    },
    {
      question: "Platforma bepulmi?",
      answer:
        "Ha, platformamizga ro‘yxatdan o‘tish va asosiy funksiyalardan foydalanish bepul. Siz kurslarni izlash, bepul darslardan foydalanish va platformadagi umumiy imkoniyatlardan hech qanday to‘lovsiz foydalanishingiz mumkin. Ammo, qo‘shimcha imkoniyatlar va yanada kengaytirilgan funksiyalarni olish uchun sizga Premium reja taklif etiladi. Premium rejada 4K sifatli video darslar, sun’iy intellekt yordamchisi, eksklyuziv kurslarga erta kirish va boshqa maxsus afzalliklar mavjud. Shunday qilib, platformamiz har bir foydalanuvchi uchun mos variantni taqdim etadi – bepul foydalanishdan tortib kengaytirilgan imkoniyatlargacha!",
    },
  ];

  const studentFAQ = [
    {
      question: "Kurs narxini qanday to‘layman?",
      answer: `Platformamizda kurslar uchun to‘lov qilish juda oson va xavfsiz. Siz tanlagan kurs uchun to‘lovni Click va Payme kabi O‘zbekistonning ommabop to‘lov tizimlari orqali amalga oshirishingiz mumkin. Ushbu tizimlar milliy valyutada tez va qulay to‘lov qilish imkoniyatini taqdim etadi. Shuningdek, xalqaro foydalanuvchilar uchun Visa, Mastercard kabi xalqaro kartalar orqali to‘lov imkoniyati mavjud bo‘lib, bularning barchasi Payoneer orqali amalga oshiriladi. Sizga mos usulni tanlaganingizdan so‘ng, to‘lov jarayonini bir necha soniya ichida xavfsiz tarzda yakunlashingiz mumkin. Kursni sotib olganingizdan so‘ng, darhol darslarga kirish huquqiga ega bo‘lasiz va ta’lim olishni boshlashingiz mumkin. To‘lov jarayoni qulay, shaffof va xavfsiz bo‘lishi uchun barcha zamonaviy texnologiyalardan foydalanamiz.`,
    },
    {
      question: "Sotib olgan kursimni qancha muddat davomida ko‘ra olaman?",
      answer:
        "Sotib olgan kurslaringizni ko‘rish muddati kursning shartlariga bog‘liq. Ko‘pchilik kurslar sizga cheksiz muddatga foydalanish imkoniyatini beradi, ya’ni bir marta sotib olingan kursni istalgan vaqtda qayta tomosha qilishingiz mumkin. Ba’zi kurslarda esa belgilangan foydalanish muddati bo‘lishi mumkin, bu haqida kurs tafsilotlarida oldindan ma’lumot beriladi. Kursga kirish huquqi faqat siz uchun ochiladi va platformamiz orqali o‘z hisobingizda saqlanadi. Shu orqali ta’lim olish jarayoningizni o‘zingizga qulay bo‘lgan tezlikda davom ettirishingiz mumkin.",
    },
  ];

  const teacherFAQ = [
    {
      question: "O‘qituvchi sifatida qanday daromad qilaman?",
      answer:
        "Platformamizda o‘qituvchi sifatida daromad qilish jarayoni juda oddiy va shaffof. Siz platformaga o‘z kurslaringizni yuklaganingizdan so‘ng, har bir sotilgan kursdan daromad olasiz. Har bir sotuvdan tushadigan daromadning foizi sizning hisobingizga avtomatik tarzda o‘tkaziladi. Platformamiz barcha jarayonlarni boshqarishda va to‘lovlarni amalga oshirishda yordam beradi, shu jumladan daromadingizni to‘liq kuzatish uchun maxsus statistik vositalarni taqdim etadi.\n" +
        "\n" +
        "Daromadlaringizni milliy yoki xalqaro to‘lov tizimlari orqali qulay tarzda yechib olish imkoniyatiga ega bo‘lasiz. O‘qituvchi sifatida sizning daromadingiz yuklagan kurslaringizning sifatiga, mavzusiga va talabalar soniga bog‘liq. Platformamiz sizga keng auditoriyaga yetib borishda va kurslaringizni muvaffaqiyatli sotishda yordam beradi, bu esa o‘zingizga mos daromad modelini yaratishingizga imkon beradi.",
    },
    {
      question: "O‘qituvchi sifatida ro‘yxatdan o‘tish bepulmi?",
      answer:
        "Ha, o‘qituvchi sifatida ro‘yxatdan o‘tish bepul. Siz faqat sotilgan kurslaringizdan komissiya to‘laysiz.",
    },
    {
      question: "Qanday kurslarni yuklasam bo‘ladi?",
      answer:
        "Har qanday foydali mavzuda kurslar yaratishingiz mumkin, masalan, dasturlash, matematika, til o‘rganish yoki hunarmandchilik.",
    },
  ];

  const technicalFAQ = [
    {
      question: "Texnik muammolar yuzaga kelsa nima qilaman?",
      answer:
        "Texnik yordam jamoamiz bilan bog‘lanish uchun bizning aloqa formasidan foydalaning yoki qo‘llab-quvvatlash markazimizga murojaat qiling.",
    },
    {
      question: "Kurslar videolari qanday sifatda bo‘ladi?",
      answer:
        "Kurs videolari HD yoki 4K sifatda bo‘ladi, va premium foydalanuvchilar yuqori sifatga ega bo‘lishlari mumkin.",
    },
    {
      question: "Mening hisobim xavfsizligini qanday ta’minlaysiz?",
      answer:
        "Platformamiz foydalanuvchi ma’lumotlarini himoya qilish uchun eng so‘nggi xavfsizlik texnologiyalaridan foydalanadi.",
    },
  ];

  const premiumFAQ = [
    {
      question: "Premium rejaga qanday o‘taman?",
      answer:
        "Profilingizga kirib, “Premiumga o‘tish” tugmasini bosing va to‘lovni amalga oshiring.",
    },
    {
      question: "Premium reja narxi qancha?",
      answer:
        "Premium reja narxi tanlangan muddat va funksiyalar asosida belgilanadi. Batafsil ma’lumotni narxlar sahifasidan topishingiz mumkin.",
    },
    {
      question: "Premium foydalanuvchi qanday afzalliklarga ega?",
      answer:
        "Premium foydalanuvchilar platformamizda bir qator eksklyuziv afzalliklarga ega bo‘lishadi. Birinchidan, premium reja orqali 4K sifatdagi video darslarni tomosha qilish imkoniyati taqdim etiladi, bu esa ta’lim jarayonini yanada sifatli va samarali qiladi. Shuningdek, premium foydalanuvchilar uchun maxsus AI yordamchisi mavjud bo‘lib, bu yordamchi kurslarni tanlashda, bilimlarni mustahkamlashda va murakkab mavzularni tushunishda yordam beradi.\n" +
        "\n" +
        "Bundan tashqari, premium foydalanuvchilar eksklyuziv kurslarga va yangi kurslarga erta kirish huquqiga ega bo‘lishadi, ya’ni ular boshqa foydalanuvchilardan oldin ta’lim olishni boshlashlari mumkin. Premium rejaga ega bo‘lganlar darslarni oflayn tarzda platforma ichida yuklab olish imkoniyatiga ega bo‘lib, internet bo‘lmagan joylarda ham o‘qishni davom ettirishlari mumkin.\n" +
        "\n" +
        "Shuningdek, premium foydalanuvchilarga barcha kurslar uchun 20% chegirma taqdim etiladi, bu esa uzoq muddatda ko‘proq mablag‘ni tejash imkonini beradi. Platformadagi maxsus funksiyalar, yuqori sifatli xizmatlar va kengaytirilgan imkoniyatlar orqali premium foydalanuvchilar ta’lim olish jarayonini yangi darajaga olib chiqishlari mumkin.",
    },
  ];

  const otherFAQ = [
    {
      question: "Kurs tog'ri kelmasa, pulimni qaytarib olishim mumkinmi?",
      answer:
        "Platformamizda kursni sotib olishdan oldin, har bir kursdan bir darsni bepul tomosha qilish imkoniyati taqdim etiladi. Bu orqali siz kursning mazmuni, sifati va sizning ehtiyojlaringizga mosligini baholashingiz mumkin. Agar kurs sizga yoqsa, sotib olish qarorini o‘zingiz qabul qilasiz.\n" +
        "\n" +
        "Shu sababli, kurs sotib olingandan keyin to‘lovlarni qaytarish imkoniyati yo‘q. Bu tizim o‘qituvchilar mehnatini qadrlash va platformada adolatli muhitni ta’minlash uchun joriy etilgan. O‘z ehtiyojlaringizni oldindan aniqlash uchun bepul darslardan foydalanishni tavsiya qilamiz.",
    },
    {
      question: "Talabalar bilan muloqot qilish imkoniyatim bormi?",
      answer:
        "Ha, har bir kursning ichida maxsus forum mavjud bo‘lib, talabalar bilan muloqot qilish imkoniyatini beradi.",
    },
    {
      question: "Kurslarni oflayn yuklab olishim mumkinmi?",
      answer:
        "Premium foydalanuvchilar kurslarni faqat platforma ichida oflayn tomosha qilish imkoniyatiga ega.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Eng Ko‘p Beriladigan Savollar"
          paragraph="Quyida platformamizdan foydalanishda ko‘p uchraydigan savollar va ularning javoblarini topishingiz mumkin."
          center
        />
        <div className="mx-auto max-w-[900px]">
          <FAQSection title="Umumiy Savollar" faqData={generalFAQ} />
          <FAQSection title="Talabalar uchun savollar" faqData={studentFAQ} />
          <FAQSection
            title="O‘qituvchilar uchun savollar"
            faqData={teacherFAQ}
          />
          <FAQSection title="Texnik Savollar" faqData={technicalFAQ} />
          <FAQSection title="Premium Reja Savollari" faqData={premiumFAQ} />
          <FAQSection title="Boshqa Savollar" faqData={otherFAQ} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
