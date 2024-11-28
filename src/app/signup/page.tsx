"use client";

import Link from "next/link";
import WithLayout from "@/components/with-layout/layout";
import { useAuth } from "@/hooks/useAuth";

const SignupPage = () => {
  const { signIn } = useAuth();

  return (
    <WithLayout>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Ro'yxatdan o'tish
                </h3>
                <p className="mb-11 text-base text-body-color dark:text-body-color-dark">
                  Ro'yxatdan o'tish uchun ma'lumotlaringizni kiriting
                </p>
                <button
                  onClick={() => signIn()}
                  className="border-stroke mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base font-medium text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary"
                >
                  <span className="mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_95:967)">
                        <path
                          d="M20.0001 10.2216C20.0001 9.53416 19.9294 8.86776 19.7881 8.22776H10.2001V12.0938H15.8001C15.5881 13.3188 14.8881 14.3838 13.8501 15.0838V17.5938H17.1951C19.1001 15.8438 20.0001 13.2738 20.0001 10.2216Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2 20.0001C12.9 20.0001 15.17 19.1151 17.195 17.5938L13.85 15.0838C12.925 15.6838 11.7 16.0201 10.2 16.0201C7.545 16.0201 5.3 14.2638 4.525 11.9001H1.075V14.4901C3.1 17.7901 6.425 20.0001 10.2 20.0001Z"
                          fill="#34A853"
                        />
                        <path
                          d="M4.525 11.9C4.325 11.3 4.225 10.6563 4.225 10C4.225 9.34375 4.325 8.7 4.525 8.1V5.51001H1.075C0.375 6.86001 0 8.39375 0 10C0 11.6063 0.375 13.14 1.075 14.49L4.525 11.9Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2 3.97994C11.7 3.97994 13.05 4.48994 14.125 5.52994L17.075 2.57994C15.17 0.979941 12.9 -0.0200586 10.2 -0.0200586C6.425 -0.0200586 3.1 2.20994 1.075 5.50994L4.525 8.09994C5.3 5.73994 7.545 3.97994 10.2 3.97994Z"
                          fill="#EA4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_95:967">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Google orqali ro'yxatdan o'tish
                </button>

                <div className="mb-8">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    {" "}
                    Ism Familiya{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ism Familiyangizni kiriting"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    {" "}
                    Email{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Elektron pochtangizni kiriting"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="password"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    {" "}
                    Parol{" "}
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Parolingizni kiriting"
                    className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
                <div className="mb-8 flex">
                  <label
                    htmlFor="checkboxLabel"
                    className="flex cursor-pointer select-none text-sm text-body-color"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="checkboxLabel"
                        className="sr-only"
                      />
                      <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-dark-3">
                        <span className="opacity-0">
                          <svg
                            width="11"
                            height="8"
                            viewBox="0 0 11 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                              fill="#3056D3"
                              stroke="#3056D3"
                              strokeWidth="0.4"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <span>
                      Men{" "}
                      <a href="#0" className="text-primary hover:underline">
                        {" "}
                        Foydalanish shartlari{" "}
                      </a>{" "}
                      va{" "}
                      <a href="#0" className="text-primary hover:underline">
                        {" "}
                        Maxfiylik siyosati{" "}
                      </a>{" "}
                      bilan tanishdim
                    </span>
                  </label>
                </div>
                <div className="mb-6">
                  <button className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                    Ro'yxatdan o'tish
                  </button>
                </div>

                <p className="text-center text-base text-body-color dark:text-body-color-dark">
                  Akkountingiz bormi?{" "}
                  <Link href="/signin" className="text-primary hover:underline">
                    Kirish
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WithLayout>
  );
};

export default SignupPage;
