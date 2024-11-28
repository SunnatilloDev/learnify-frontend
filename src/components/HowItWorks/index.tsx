import StepCard from "./StepCard";
import { studentSteps, teacherSteps } from "./data";


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
