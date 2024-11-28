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
      <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
    </div>

    {/* Decorative Elements */}
    <div className="pointer-events-none absolute -right-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/30 to-primary/0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:from-primary/40 dark:to-primary/0" />
    <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/20 to-primary/0 opacity-0 blur-[100px] transition-opacity duration-500 group-hover:opacity-100 dark:from-primary/40 dark:to-primary/0" />
  </div>
);

export default StepCard;
