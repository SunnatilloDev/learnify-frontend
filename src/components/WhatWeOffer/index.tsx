import { CheckCircle, Star } from "lucide-react";

const WhatWeOffer = () => {
  const offersForStudents = [
    {
      title: "Turli xil kurslarga kirish",
      description:
        "Dasturlashdan hunarmandchilikka qadar kurslarni oson toping va o‘rganing.",
    },
    {
      title: "Gamifikatsiyalangan o‘qish",
      description:
        "Liderlar jadvali, nishonlar va mukofotlar bilan o‘qishni qiziqarli qiling.",
    },
    {
      title: "AI tomonidan tavsiyalar",
      description:
        "O‘zingizga mos kurslarni tezroq topish uchun sun’iy intellekt yordamidan foydalaning.",
    },
    {
      title: "Cheksiz sertifikatlar",
      description: "Kursni tugatganingizda avtomatik tarzda sertifikat oling.",
    },
    {
      title: "Foydalanish uchun qulay dizayn",
      description:
        "Platformamizni har qanday qurilmada qulay foydalanishingiz mumkin.",
    },
  ];

  const offersForTeachers = [
    {
      title: "Kurslarni boshqarish",
      description:
        "Kurs yaratish, boshqarish va o‘quvchilaringizni kuzatib boring.",
    },
    {
      title: "Analitika va statistika",
      description:
        "Daromad va talabalaringiz muvaffaqiyatini kuzatish uchun statistik ma’lumotlar.",
    },
    {
      title: "Daromadni oshirish",
      description:
        "Platformamizda o‘z kurslaringizni sotib, bilimlaringizni daromadga aylantiring.",
    },
    {
      title: "O‘qituvchilar uchun qo‘llab-quvvatlash",
      description:
        "Maxsus xizmat ko‘rsatish guruhi orqali har doim yordamga ega bo‘ling.",
    },
  ];

  const offersForPremiumUsers = [
    {
      title: "4K Sifatli Videolar",
      description:
        "Premium foydalanuvchilar yuqori sifatli darslarni tomosha qilish imkoniyatiga ega.",
    },
    {
      title: "AI Yordamchisi",
      description:
        "O‘qish jarayonini tezlashtiruvchi maxsus sun’iy intellekt yordamidan foydalaning.",
    },
    {
      title: "Eksklyuziv Kurslarga Kirish",
      description:
        "Faqat premium foydalanuvchilar uchun ochiq bo‘lgan maxsus kurslardan foydalaning.",
    },
    {
      title: "20% Chegirma",
      description:
        "Har bir kurs sotib olishda avtomatik 20% chegirmadan foydalaning.",
    },
    {
      title: "Oflayn Kurslar",
      description:
        "Platformamiz ichida kurslarni oflayn tomosha qilish imkoniyatiga ega bo‘ling.",
    },
    {
      title: "Kelajakda Yanada Ko‘proq Imkoniyatlar!",
      description:
        "Biz bilan qoling – premium foydalanuvchilar uchun eng yaxshi funksiyalar hali oldinda!",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
            Biz nimani taklif qilamiz?
          </h2>
          <p className="text-lg text-body-color dark:text-body-color-dark">
            Talabalar, o‘qituvchilar va premium foydalanuvchilar uchun maxsus
            imkoniyatlar.
          </p>
        </div>

        {/* For Students */}
        <div className="mb-16">
          <h3 className="mb-8 text-2xl font-bold text-primary dark:text-white">
            O'quvchilar uchun
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offersForStudents.map((offer, index) => (
              <div
                key={index}
                className="rounded-sm bg-white p-6 shadow-lg dark:bg-gray-dark"
              >
                <CheckCircle className="mb-4 h-8 w-8 text-primary dark:text-white" />
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  {offer.title}
                </h4>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* For Teachers */}
        <div className="mb-16">
          <h3 className="mb-8 text-2xl font-bold text-primary dark:text-white">
            O‘qituvchilar uchun
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offersForTeachers.map((offer, index) => (
              <div
                key={index}
                className="rounded-sm bg-white p-6 shadow-lg dark:bg-gray-dark"
              >
                <CheckCircle className="mb-4 h-8 w-8 text-primary dark:text-white" />
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  {offer.title}
                </h4>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* For Premium Users */}
        <div>
          <h3 className="mb-8 text-2xl font-bold text-primary dark:text-white">
            Premium Foydalanuvchilar uchun{" "}
            <span className={"font-light italic"}>(Tez kunda)</span>
          </h3>
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offersForPremiumUsers.map((offer, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-blue-500 p-6 text-white shadow-xl"
              >
                <div className="absolute left-0 top-0 h-full w-full scale-110 transform bg-gradient-to-r from-white/10 to-white/20 opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100"></div>
                <Star className="mb-4 h-8 w-8" />
                <h4 className="mb-2 text-lg font-semibold">{offer.title}</h4>
                <p className="text-base">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
