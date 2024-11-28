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

const StepCard = ({ step, index }: { step: any; index: number }) => (
  <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-white to-white/90 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.07)] dark:from-slate-900/50 dark:via-slate-900/50 dark:to-slate-800/50 dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)]">
    <div className="relative z-10">
      {/* Step Number */}
      <div className="absolute -right-4 -top-4 text-[8rem] font-bold text-slate-100 transition-transform duration-500 group-hover:scale-110 group-hover:text-slate-50 dark:text-slate-800/50 dark:group-hover:text-slate-800/30">
        {index + 1}
      </div>
      
      {/* Icon */}
      <div className="relative mb-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg shadow-black/[0.03] ring-1 ring-slate-100 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/10 group-hover:to-primary/5 group-hover:ring-primary/20 dark:from-slate-800 dark:to-slate-900/90 dark:ring-slate-800 dark:group-hover:from-primary dark:group-hover:to-primary/90 dark:group-hover:ring-primary/50">
        <div className="relative z-10 text-slate-600 transition-colors duration-300 group-hover:text-primary dark:text-slate-400 dark:group-hover:text-white">
          {step.icon}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/[0.01] dark:from-white/[0.01] dark:to-white/[0.02]" />
      </div>

      {/* Content */}
      <h3 className="relative mb-4 text-2xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-primary dark:text-slate-100 dark:group-hover:text-primary">
        {step.title}
        {/* <div className="absolute -left-2 -z-10 h-3 w-full translate-y-3 bg-primary/10 transition-all duration-300 group-hover:translate-y-5 group-hover:bg-primary/20 dark:bg-primary/20 dark:group-hover:bg-primary/30" /> */}
      </h3>
      <p className="text-slate-600 dark:text-slate-400">
        {step.description}
      </p>
    </div>

    {/* Decorative Elements */}
    <div className="pointer-events-none absolute -right-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/30 to-primary/0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:from-primary/40 dark:to-primary/0" />
    <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/20 to-primary/0 opacity-0 blur-[100px] transition-opacity duration-500 group-hover:opacity-100 dark:from-primary/40 dark:to-primary/0" />
  </div>
);

const HowItWorks = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-white dark:from-slate-900/50 dark:via-slate-900 dark:to-slate-900">
      <div className="container relative py-16 md:py-20 lg:py-24">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-[620px] text-center lg:mb-20">
          <span className="relative mb-4 inline-flex items-center justify-center">
            <span className="absolute -z-10 h-8 w-8 animate-ping rounded-full bg-primary/20" />
            <span className="inline-flex rounded-full bg-gradient-to-br from-primary/20 to-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-[2px] dark:from-primary/30 dark:to-primary/20 dark:text-primary">
              Qanday ishlaydi?
            </span>
          </span>
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            O'quvchilar uchun
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            Platformada o'quvchi sifatida qanday tahsil olishingiz mumkin? Quyidagi bosqichlar bilan tanishing
          </p>
        </div>

        {/* Student Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {studentSteps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* Teacher Section */}
        <div className="mx-auto mb-16 mt-24 max-w-[620px] text-center lg:mb-20">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            O'qituvchilar uchun
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            O'qituvchi sifatida platformada qanday faoliyat yuritishingiz mumkin? Quyidagi bosqichlar bilan tanishing
          </p>
        </div>

        {/* Teacher Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teacherSteps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* Background Elements */}
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-primary/0 blur-[120px] dark:from-primary/30" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-primary/0 blur-[120px] dark:from-primary/30" />
      </div>
    </section>
  );
};

export default HowItWorks;
