import SectionTitle from "../Common/SectionTitle";

const goals = [
  {
    id: 1,
    title: "Ko‘nikmalarni monetizatsiya qilish",
    description:
      "Foydalanuvchilar o‘z bilim va ko‘nikmalarini darslarga aylantirishi va ular orqali daromad olishi uchun platformamizni ideal maydon yaratdik.",
  },
  {
    id: 2,
    title: "Ta’lim va o‘rgatish uchun mukammal muhit",
    description:
      "Ham o‘qituvchilar, ham talabalar uchun qulay va samarali o‘qitish hamda o‘rganish imkoniyatlarini taklif qilamiz.",
  },
  {
    id: 3,
    title: "Har qanday ko‘nikmalarni taklif qilish",
    description:
      "Platformamizda siz dasturlashdan san’atgacha, texnologiyadan tibbiyotgacha bo‘lgan har qanday yo‘nalishda bilim olishingiz va o‘rgatishingiz mumkin.",
  },
  {
    id: 4,
    title: "AI yordamida ta’lim va o‘qitishni rivojlantirish",
    description:
      "Sun’iy intellekt yordamida foydalanuvchilarning o‘qitish va o‘rganish tajribasini individual va samarali qilishga harakat qilamiz.",
  },
  {
    id: 5,
    title: "O‘qituvchi va talabalar uchun eng yaxshi statistikalar",
    description:
      "Foydalanuvchilarning rivojlanishini kuzatish uchun qulay va batafsil statistika vositalarini taqdim etamiz.",
  },
  {
    id: 6,
    title: "Doimiy ravishda yangilanadigan platforma",
    description:
      "Texnologiya va foydalanuvchilar ehtiyojlariga mos ravishda platformamizni yangilab boramiz.",
  },
  {
    id: 7,
    title: "Yaxshi qo‘llab-quvvatlash jamoasi",
    description:
      "Foydalanuvchilarimizning barcha savollariga tez va samarali javob beradigan qo‘llab-quvvatlash jamoasini taqdim qilamiz.",
  },
  {
    id: 8,
    title: "Ta’limni gamifikatsiya qilish",
    description:
      "O‘rganishni yanada qiziqarli qilish uchun ta’lim jarayoniga o‘yin elementlarini qo‘shamiz.",
  },
];

const Goals = () => {
  return (
    <section
      id="goals"
      className="bg-gray-50 py-16 dark:bg-gray-900 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Bizning Maqsadlarimiz"
          paragraph="Platformamizning asosiy maqsadlari ta’limni qulay, samarali va innovatsion qilishdir. Har bir foydalanuvchiga mos keladigan imkoniyatlar yaratishga intilamiz."
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="rounded-lg bg-white p-6 shadow-md transition duration-300 hover:shadow-lg dark:bg-gray-800"
            >
              <h3 className="mb-3 text-xl font-bold text-primary dark:text-white">
                {goal.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
