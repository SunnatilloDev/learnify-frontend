import { DollarSign, Users, Award, Sparkles, Clock, Globe } from "lucide-react";

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "50K+",
    label: "Faol o'quvchilar",
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "95%",
    label: "O'quvchilar tavsiya qiladi",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    value: "24/7",
    label: "O'rganish imkoniyati",
  },
];

const benefits = [
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Hamyonbop narxlar",
    description: "Sifatli ta'lim endi hammaga arzon va qulay",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Tajribali o'qituvchilar",
    description: "Eng yaxshi mutaxassislardan o'rganing",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Moslashuvchan jadval",
    description: "Istalgan vaqtda, istalgan joyda o'rganing",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-b from-white/50 to-white/0 py-16 dark:from-dark/50 dark:to-dark/0 lg:py-24">
      <div className="container relative">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-[620px] text-center lg:mb-16">
          <span className="mb-2 inline-block rounded-full bg-gradient-to-r from-primary/20 to-primary/0 px-4 py-1 text-base font-semibold text-primary backdrop-blur-sm dark:from-primary/40 dark:to-primary/5">
            Nega aynan EduVerse?
          </span>
          <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[42px]">
            Bizning afzalliklarimiz
          </h2>
          <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark sm:text-xl sm:leading-relaxed">
            EduVerse platformasi sizga eng yaxshi ta'lim tajribasini taqdim etadi
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:from-white/[0.04] dark:to-white/[0.02] dark:shadow-primary/5"
            >
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/30 dark:shadow-primary/20">
                  {stat.icon}
                </div>
                <h3 className="mb-2 text-5xl font-bold text-primary">
                  {stat.value}
                </h3>
                <p className="text-lg font-medium text-dark dark:text-white">
                  {stat.label}
                </p>
              </div>
              <div className="absolute inset-0 z-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary opacity-5 blur-3xl filter" />
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:from-white/[0.04] dark:to-white/[0.02] dark:shadow-primary/5"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/30 dark:shadow-primary/20">
                  {benefit.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-dark dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark">
                  {benefit.description}
                </p>
              </div>
              <div className="absolute inset-0 z-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary opacity-5 blur-3xl filter" />
            </div>
          ))}
        </div>

        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary opacity-5 blur-[100px] filter dark:opacity-[0.07]" />
          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-primary opacity-5 blur-[100px] filter dark:opacity-[0.07]" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
