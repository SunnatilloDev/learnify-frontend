import {
  BookOpen,
  BrainCircuit,
  FileCheck,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  MonitorPlay,
  PenTool,
  PersonStanding,
  Settings,
  Trophy,
  Users,
  Video,
  Wand2,
} from "lucide-react";

export const features = [
  {
    id: 1,
    icon: <MonitorPlay className="h-7 w-7" />,
    title: "Onlayn darslar",
    description:
      "Platformada o'qituvchilar tomonidan yaratilgan yuqori sifatli video darslar mavjud",
    category: "learning",
  },
  {
    id: 2,
    icon: <MessageSquare className="h-7 w-7" />,
    title: "Jonli muloqot",
    description:
      "O'qituvchi va o'quvchilar o'rtasida real vaqtda muloqot qilish imkoniyati",
    category: "communication",
  },
  {
    id: 3,
    icon: <FileCheck className="h-7 w-7" />,
    title: "Topshiriqlar",
    description:
      "Har bir mavzu bo'yicha amaliy topshiriqlar va testlar orqali bilimlarni mustahkamlash",
    category: "assessment",
  },
  {
    id: 4,
    icon: <LayoutDashboard className="h-7 w-7" />,
    title: "Shaxsiy kabinet",
    description:
      "Har bir foydalanuvchi uchun qulay va zamonaviy shaxsiy kabinet",
    category: "dashboard",
  },
  {
    id: 5,
    icon: <BrainCircuit className="h-7 w-7" />,
    title: "Sun'iy intellekt",
    description:
      "AI yordamida personallashtirilgan o'quv dasturi va tavsiyalar",
    category: "ai",
  },
  {
    id: 6,
    icon: <Trophy className="h-7 w-7" />,
    title: "Yutuqlar",
    description:
      "O'quvchilarning yutuqlarini kuzatib borish va rag'batlantirish tizimi",
    category: "gamification",
  },
  {
    id: 7,
    icon: <Video className="h-7 w-7" />,
    title: "Video konferensiya",
    description:
      "Guruh bo'lib yoki individual tarzda video darslar o'tkazish imkoniyati",
    category: "communication",
  },
  {
    id: 8,
    icon: <PenTool className="h-7 w-7" />,
    title: "Interaktiv doskalar",
    description:
      "Virtual doska orqali materiallarni tushuntirish va hamkorlikda ishlash",
    category: "tools",
  },
  {
    id: 9,
    icon: <BookOpen className="h-7 w-7" />,
    title: "Elektron kutubxona",
    description:
      "Keng qamrovli o'quv materiallari va kitoblar to'plami",
    category: "resources",
  },
  {
    id: 10,
    icon: <Users className="h-7 w-7" />,
    title: "Guruhlar",
    description:
      "O'quvchilarni guruhlarga bo'lib o'qitish va hamkorlikda ishlash",
    category: "collaboration",
  },
  {
    id: 11,
    icon: <GraduationCap className="h-7 w-7" />,
    title: "Sertifikatlar",
    description:
      "Kurslarni muvaffaqiyatli yakunlagan o'quvchilarga sertifikatlar berish",
    category: "certification",
  },
  {
    id: 12,
    icon: <Settings className="h-7 w-7" />,
    title: "Moslashuvchanlik",
    description:
      "Har bir o'quvchining o'zlashtirish sur'atiga moslashgan o'quv dasturi",
    category: "personalization",
  },
  {
    id: 13,
    icon: <Wand2 className="h-7 w-7" />,
    title: "AI Yordamchi",
    description:
      "24/7 AI asosida ishlaydigon yordamchi o'qituvchi",
    category: "ai",
  },
  {
    id: 14,
    icon: <PersonStanding className="h-7 w-7" />,
    title: "Individual yondashuv",
    description:
      "Har bir o'quvchiga individual yondashuv va qo'llab-quvvatlash",
    category: "personalization",
  },
];
