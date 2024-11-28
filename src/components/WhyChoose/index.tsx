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
    <section className="relative z-10 overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100/80 to-slate-50 py-16 dark:from-dark/50 dark:via-dark dark:to-dark/50 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-8 max-w-[620px] text-center lg:mb-16">
          <span className="relative mb-4 inline-flex items-center justify-center">
            <span className="absolute -z-10 h-8 w-8 animate-ping rounded-full bg-primary/20" />
            <span className="inline-flex rounded-full bg-gradient-to-br from-primary/20 to-primary/10 px-4 py-1.5 text-base font-semibold text-primary ring-1 ring-primary/20 dark:from-primary dark:to-primary/80 dark:text-white dark:ring-0">
              Nega aynan EduVerse?
            </span>
          </span>
          <h2 className="relative mb-6 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-[42px]">
            Bizni tanlashingiz uchun sabablar
            <div className="absolute left-1/2 top-1/2 -z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-xl dark:bg-primary/30" />
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl sm:leading-relaxed">
            EduVerse platformasi orqali o'qituvchilar va o'quvchilar uchun eng yaxshi ta'lim muhitini yaratamiz
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-white to-white/90 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.07)] dark:from-slate-900/50 dark:via-slate-900/50 dark:to-slate-800/50 dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)]"
            >
              <div className="relative z-10">
                <div className="relative mb-8 inline-flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg shadow-black/[0.03] ring-1 ring-slate-100 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/10 group-hover:to-primary/5 group-hover:ring-primary/20 dark:from-slate-800 dark:to-slate-900/90 dark:ring-slate-800 dark:group-hover:from-primary dark:group-hover:to-primary/90 dark:group-hover:ring-primary/50">
                  <div className="relative z-10 text-slate-600 transition-colors duration-300 group-hover:text-primary dark:text-slate-400 dark:group-hover:text-white">
                    {benefit.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/[0.01] dark:from-white/[0.01] dark:to-white/[0.02]" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-primary dark:text-slate-100 dark:group-hover:text-primary">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {benefit.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="pointer-events-none absolute -right-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/30 to-primary/0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:from-primary/40 dark:to-primary/0" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/20 to-primary/0 opacity-0 blur-[100px] transition-opacity duration-500 group-hover:opacity-100 dark:from-primary/40 dark:to-primary/0" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-white to-white/90 p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.07)] dark:from-slate-900/50 dark:via-slate-900/50 dark:to-slate-800/50 dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)]"
            >
              <div className="relative">
                <h4 className="mb-2 text-3xl font-bold text-primary dark:text-white">
                  {stat.value}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-300 group-hover:bg-primary/10 dark:bg-primary/10 dark:group-hover:bg-primary/20" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-primary/0 blur-[120px] dark:from-primary/30" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-primary/0 blur-[120px] dark:from-primary/30" />
        <div className="absolute left-1/3 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/40 to-primary/0 blur-2xl dark:from-primary/50" />
      </div>
    </section>
  );
};

export default WhyChoose;
