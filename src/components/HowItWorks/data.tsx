import { BookOpen, GraduationCap, LucideIcon, PlayCircle, UserCheck, PenTool, BrainCircuit, BarChart3 } from "lucide-react";

const studentSteps = [
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Ro'yxatdan o'ting",
      description: "Platformaga kirish uchun ro'yxatdan o'ting va o'z profilingizni yarating"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Kursni tanlang",
      description: "O'zingizga mos kursni tanlang va o'qituvchi bilan bog'laning"
    },
    {
      icon: <PlayCircle className="h-8 w-8" />,
      title: "Darslarni boshlang",
      description: "Video darslar va amaliy mashg'ulotlar orqali bilim oling"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Sertifikat oling",
      description: "Kursni muvaffaqiyatli tugatgach, sertifikat qo'lga kiriting"
    }
  ];
  
  const teacherSteps = [
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Ro'yxatdan o'ting",
      description: "O'qituvchi sifatida ro'yxatdan o'ting va profilingizni to'ldiring"
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Kurs yarating",
      description: "Sifatli video darslar va materiallar tayyorlang"
    },
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "E'lon qiling",
      description: "Kursni platformada e'lon qiling va o'quvchilarni qabul qiling"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Daromad qiling",
      description: "O'quvchilar sonini ko'paytirib, daromadingizni oshiring"
    }
  ];

  export { studentSteps, teacherSteps }