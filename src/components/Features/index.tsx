import Link from "next/link";
import { features } from "./featuresData";
import SingleFeature from "./SingleFeature";
import WithLayout from "../with-layout/layout";

const Features = ({ showAll = false }: { showAll?: boolean }) => {
  const displayedFeatures = showAll ? features : features.slice(0, 6);

  return (
    <WithLayout>
    <section className="relative z-10 overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100/80 to-slate-50 py-16 dark:from-dark/50 dark:via-dark dark:to-dark/50 lg:py-24">
      <div className="container">
        {!showAll && (
          <div className="mx-auto mb-12 max-w-[620px] text-center lg:mb-20">
            <span className="relative mb-4 inline-flex items-center justify-center">
              <span className="absolute -z-10 h-8 w-8 animate-ping rounded-full bg-primary/20" />
              <span className="inline-flex rounded-full bg-gradient-to-br from-primary/20 to-primary/10 px-4 py-1.5 text-base font-semibold text-primary ring-1 ring-primary/20 dark:from-primary dark:to-primary/80 dark:text-white dark:ring-0">
                Imkoniyatlar
              </span>
            </span>
            <h2 className="relative mb-6 text-3xl font-bold !leading-tight text-slate-800 dark:text-white sm:text-4xl md:text-[45px]">
              Platformaning asosiy imkoniyatlari
              <div className="absolute left-1/2 top-1/2 -z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-xl dark:bg-primary/30" />
            </h2>
            <p className="text-lg !leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl md:text-2xl">
              O'qituvchi va o'quvchilar uchun eng zamonaviy imkoniyatlar
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {displayedFeatures.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 flex justify-center">
            <Link
              href="/features"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary/90 px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(74,108,247,0.5)] dark:shadow-[0_10px_20px_-10px_rgba(74,108,247,0.3)]"
            >
              <span className="relative">
                Barcha imkoniyatlarni ko'rish
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-white transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </Link>
          </div>
        )}
      </div>

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-primary/0 blur-[120px] dark:from-primary/30" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-primary/0 blur-[120px] dark:from-primary/30" />
        <div className="absolute left-1/3 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/40 to-primary/0 blur-2xl dark:from-primary/50" />
      </div>
    </section>
    </WithLayout>
  );
};

export default Features;
