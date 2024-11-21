import { Feature } from "@/types/feature";
import {
  BadgeDollarSign,
  BrainCircuit,
  Earth,
  HandCoinsIcon,
  Swords,
  TvMinimalPlayIcon,
  Users,
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
];

export default featuresData;
