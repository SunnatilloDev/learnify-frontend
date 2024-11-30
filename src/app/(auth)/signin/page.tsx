"use client";

import Link from "next/link";
import WithLayout from "@/components/with-layout/layout";
import { signIn, useSession } from "next-auth/react";
import { useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const SignInContent = () => {
  const searchParams = useSearchParams();
  const isNewlyRegistered = searchParams?.get("registered") === "true";
  
  return (
    <WithLayout>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded-md bg-white px-6 py-10 shadow-one dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Tizimga kirish
                </h3>
                {isNewlyRegistered && (
                  <div className="mb-4 rounded-md bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900 dark:text-green-100">
                    Ro'yxatdan o'tish muvaffaqiyatli yakunlandi! Endi tizimga kirishingiz mumkin.
                  </div>
                )}
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Tizimga kirish uchun Google hisobingizdan foydalaning
                </p>
                <button
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                  className="mb-6 flex w-full items-center justify-center gap-3 rounded-md bg-white p-3 text-base font-medium text-body-color shadow-one hover:text-primary dark:bg-[#242B51] dark:text-body-color dark:shadow-signUp dark:hover:text-white"
                >
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_95:967)">
                        <path
                          d="M20.0001 10.2216C20.0001 9.53416 19.9294 8.86766 19.7854 8.22116H10.2041V12.0486H15.8276C15.7211 12.6671 15.4814 13.2422 15.1229 13.7424C14.7644 14.2426 14.2946 14.6566 13.7416 14.9628V17.4128H17.0596C18.9896 15.6728 20.0001 13.1716 20.0001 10.2216Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2042 20.0001C12.9592 20.0001 15.2722 19.1111 17.0597 17.4128L13.7417 14.9628C12.8807 15.5438 11.7227 15.8908 10.2042 15.8908C7.54021 15.8908 5.28021 14.1578 4.45521 11.8128H0.994209V14.3348C2.77521 17.7348 6.21521 20.0001 10.2042 20.0001Z"
                          fill="#34A853"
                        />
                        <path
                          d="M4.45518 11.8128C4.24318 11.2438 4.12718 10.6308 4.12718 9.99981C4.12718 9.36881 4.24318 8.75681 4.45518 8.18781V5.66581H0.994179C0.345179 7.00781 -0.000320984 8.48481 -0.000320984 9.99981C-0.000320984 11.5148 0.345179 12.9918 0.994179 14.3348L4.45518 11.8128Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2042 4.10884C11.6932 4.10884 13.0302 4.63284 14.1042 5.65484L17.0302 2.72884C15.2672 1.03984 12.9542 0 10.2042 0C6.21521 0 2.77521 2.26533 0.994209 5.66533L4.45521 8.18733C5.28021 5.84233 7.54021 4.10884 10.2042 4.10884Z"
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
                  Google bilan davom etish
                </button>

                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                  <p className="w-full px-5 text-center text-base font-medium text-body-color">
                    Yoki elektron pochta orqali
                  </p>
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                </div>
                <form>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Elektron pochta
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Parol
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
                    <div className="mb-4 sm:mb-0">
                      <label
                        htmlFor="checkboxLabel"
                        className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="checkboxLabel"
                            className="sr-only"
                          />
                          <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
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
                        Meni eslab qol
                      </label>
                    </div>
                    <div>
                      <a
                        href="#0"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Parolni unutdingizmi?
                      </a>
                    </div>
                  </div>
                  <div className="mb-6">
                    <button className="flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Kirish
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Hisobingiz yo'qmi?{" "}
                  <Link href="/signup" className="text-primary hover:underline">
                    Ro'yxatdan o'tish
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

const SigninPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/welcome");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    }>
      <SignInContent />
    </Suspense>
  );
};

export default SigninPage;
