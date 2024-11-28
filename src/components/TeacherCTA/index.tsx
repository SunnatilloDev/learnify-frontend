import Link from "next/link";

const TeacherCTA = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <div className="mb-2">
                <span className="text-primary mb-4 block text-lg font-semibold">
                  O'qituvchilar uchun
                </span>
              </div>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                O'z bilimlaringizni bo'lishing va daromad qiling!
              </h2>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                EduVerse platformasida o'z kurslaringizni yarating, minglab talabalarga bilim bering va yuqori daromad qiling. Bizning platformamiz sizga eng yaxshi o'qitish tajribasini taqdim etadi.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Link
                  href="/signup"
                  className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  🎓 O'qitishni boshlash
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-86.4509"
              y1="600.973"
              x2="-86.4509"
              y2="1142.58"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-158.324"
              y1="385.272"
              x2="-158.324"
              y2="926.879"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default TeacherCTA;
