import { Feature } from "@/types/feature";
import {
  BrainCircuit,
  Earth,
  HandCoinsIcon,
  Swords,
  TvMinimalPlayIcon,
  Users,
  BookOpenIcon,
  ShieldCheckIcon,
  BarChart3Icon,
  RocketIcon,
  MessageSquareDot,
  ClockIcon,
  CloudIcon,
  MedalIcon,
  LightbulbIcon,
} from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Earth size={"40px"} />,
    title: "Har bir kishi uchun qulay ta'lim",
    paragraph:
      "Platformamiz ta'limni har kimga qulay va arzon qilib taqdim etadi, talabalar va o‘qituvchilarga dunyoning istalgan nuqtasida bog‘lanib o‘sish imkonini beradi.",
  },
  {
    id: 2,
    icon: <TvMinimalPlayIcon size={"40px"} />,
    title: "Yuqori sifatli video kurslar",
    paragraph:
      "4K sifatli kurslar bilan ta'limni yangi darajada boshdan kechiring. Aniq va qiziqarli darslar talabalar uchun tayyorlangan.",
  },
  {
    id: 3,
    icon: <BrainCircuit size={"40px"} />,
    title: "AI orqali ta'limni yaxshilash",
    paragraph:
      "AI yordamida kurslarni tavsiya qilish, savollarga javob berish va talabalar hamda o‘qituvchilar uchun rivojlanishni tezlashtirish imkonini qo‘lga kiriting.",
  },
  {
    id: 4,
    icon: <HandCoinsIcon size={"40px"} />,
    title: "O‘qituvchilarni qo‘llab-quvvatlash",
    paragraph:
      "O‘qituvchilar o‘z mahoratlarini monetizatsiya qilishlari mumkin, sifatlilikka e'tibor qaratib, texnik ishlarni bizga topshirishadi.",
  },
  {
    id: 5,
    icon: <Users size={"40px"} />,
    title: "Hamkorlikdagi o‘quv xonalari",
    paragraph:
      "Bir xil maqsadlarga erishishni istovchi odamlar bilan o‘quv xonalariga qo‘shiling. Fikr almashing, mavzularni muhokama qiling va motivatsiyani saqlang.",
  },
  {
    id: 6,
    icon: <Swords size={"40px"} />,
    title: "Gamifikatsiyalangan ta'lim tajribasi",
    paragraph:
      "Kurslarni tugatish va platformada faol ishtirok etish uchun reytinglar, yutuqlar va mukofotlar bilan motivatsiyani oshiring. O‘rganish hech qachon bu qadar qiziqarli bo‘lmagan!",
  },
  {
    id: 7,
    icon: <BookOpenIcon size={"40px"} />,
    title: "Keng qamrovli kurslar",
    paragraph:
      "Dunyoning yetakchi mutaxassislari tomonidan tayyorlangan yuzlab kurslardan o‘z maqsadlaringizga mos keladiganini toping.",
  },
  {
    id: 8,
    icon: <ShieldCheckIcon size={"40px"} />,
    title: "Sertifikatlangan ta'lim",
    paragraph:
      "Kurslarni yakunlang va yutuqlaringizni isbotlovchi sertifikatlar oling. Sertifikatlar yirik kompaniyalar tomonidan tan olinadi.",
  },
  {
    id: 9,
    icon: <BarChart3Icon size={"40px"} />,
    title: "Shaxsiy rivojlanish statistikalari",
    paragraph:
      "Ta'lim yo‘lingizni kuzatib boring: muvaffaqiyatlaringiz, zaif tomonlaringiz va rivojlanishingizni tahlil qiling.",
  },
  {
    id: 10,
    icon: <RocketIcon size={"40px"} />,
    title: "Kariyerangizni tezlashtiring",
    paragraph:
      "Bozorda talab yuqori bo‘lgan ko‘nikmalarni o‘rganing va EduVerse orqali muvaffaqiyatli kelajak sari qadam tashlang.",
  },
  {
    id: 11,
    icon: <MessageSquareDot size={"40px"} />,
    title: "O‘qituvchilar bilan jonli aloqalar",
    paragraph:
      "O‘qituvchilarga to‘g‘ridan-to‘g‘ri savollar bering va real vaqt rejimida javob oling. Platformamiz muloqot uchun qulay vositalar taqdim etadi.",
  },
  {
    id: 12,
    icon: <ClockIcon size={"40px"} />,
    title: "Moslashuvchan jadval",
    paragraph:
      "O‘zingizga qulay vaqtda o‘rganing. Moslashuvchan jadval tufayli ta'lim olish imkoniyatlari cheklanmagan.",
  },
  {
    id: 13,
    icon: <CloudIcon size={"40px"} />,
    title: "Materiallarni yuklab olish imkoniyati",
    paragraph:
      "Darslarni yuklab oling va internet aloqasiz ham ta'limni davom ettiring.",
  },
  {
    id: 14,
    icon: <MedalIcon size={"40px"} />,
    title: "Global reyting tizimi",
    paragraph:
      "Talabalar va o‘qituvchilar o‘zlarining ta'lim yutuqlari bo‘yicha global reytinglar orqali boshqa foydalanuvchilar bilan raqobatlasha oladilar.",
  },
  {
    id: 15,
    icon: <LightbulbIcon size={"40px"} />,
    title: "Yangi g‘oyalarga ochiq platforma",
    paragraph:
      "Innovatsion fikrlaringizni platformada amalda qo‘llang. EduVerse ijodkorlikni rag‘batlantiradi.",
  },
];

export default featuresData;
