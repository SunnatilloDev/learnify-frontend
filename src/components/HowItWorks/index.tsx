import { BookOpenIcon, GraduationCapIcon, TrophyIcon, PenToolIcon, BrainCircuitIcon, BarChart3Icon } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-b from-white/50 to-white/0 py-16 dark:from-dark/50 dark:to-dark/0 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-base font-semibold text-primary">
            Qanday ishlaydi?
          </span>
          <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[42px]">
            Platformadan foydalanish juda oson
          </h2>
          <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl sm:leading-relaxed">
            EduVerse platformasi talabalar va o'qituvchilar uchun qulay muhitni taqdim etadi
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Students Section */}
          <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-[#4A6CF7]/10 via-[#4A6CF7]/5 to-transparent p-10 backdrop-blur-sm transition-all hover:shadow-lg dark:from-[#4A6CF7]/20 dark:via-[#4A6CF7]/10">
            <div className="absolute right-0 top-0 -z-10 h-40 w-40 rotate-45 bg-gradient-to-br from-primary/20 to-transparent" />
            
            <h3 className="mb-8 text-2xl font-bold text-dark dark:text-white">
              👨‍🎓 Talabalar uchun
            </h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-md">
                  <BookOpenIcon size={24} />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-dark dark:text-white">
                    1. Kursni toping
                  </h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    Sizga kerakli bo'lgan kursni katalogdan tanlang
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-md">
                  <GraduationCapIcon size={24} />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-dark dark:text-white">
                    2. O'rganing
                  </h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    Kursni boshlang va o'z tempingizda o'rganing
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-md">
                  <TrophyIcon size={24} />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-dark dark:text-white">
                    3. Sertifikat oling
                  </h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    Kursni tugatib, yutuqlaringizni tasdiqlovchi sertifikat oling
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Teachers Section */}
          <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-[#4A6CF7]/10 via-[#4A6CF7]/5 to-transparent p-10 backdrop-blur-sm transition-all hover:shadow-lg dark:from-[#4A6CF7]/20 dark:via-[#4A6CF7]/10">
            <div className="absolute right-0 top-0 -z-10 h-40 w-40 rotate-45 bg-gradient-to-br from-primary/20 to-transparent" />
            
            <h3 className="mb-8 text-2xl font-bold text-dark dark:text-white">
              👨‍🏫 O'qituvchilar uchun
            </h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-md">
                  <PenToolIcon size={24} />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-dark dark:text-white">
                    1. Kurs yarating
                  </h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    O'z bilimlaringizni video darslar orqali ulashing
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-md">
                  <BrainCircuitIcon size={24} />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-dark dark:text-white">
                    2. E'lon qiling
                  </h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    Kursingizni platformada e'lon qiling va daromad qiling
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-md">
                  <BarChart3Icon size={24} />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-dark dark:text-white">
                    3. Natijalarni kuzating
                  </h4>
                  <p className="text-body-color dark:text-body-color-dark">
                    O'quvchilar faolligini va daromadingizni kuzatib boring
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        <span className="absolute left-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-br from-primary/5 to-transparent dark:from-primary/10" />
        <span className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-bl from-primary/5 to-transparent dark:from-primary/10" />
      </div>
    </section>
  );
};

export default HowItWorks;
