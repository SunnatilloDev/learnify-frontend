"use client";

import { useSearchParams } from "next/navigation";
import WithLayout from "@/components/with-layout/layout";
import Link from "next/link";
import { Suspense } from "react";

const ErrorContent = () => {
  const searchParams = useSearchParams();
  const error = searchParams?.get('error');

  let errorMessage = 'Xatolik yuz berdi';
  if (error === 'OAuthAccountNotLinked') {
    errorMessage = 'Bu elektron pochta boshqa usul bilan ro\'yxatdan o\'tgan';
  }

  return (
    <WithLayout>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded-md bg-white px-6 py-10 shadow-one dark:bg-dark sm:p-[60px]">
                <div className="mb-8 rounded-lg bg-red-50 p-4 dark:bg-red-900/50">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800 dark:text-red-200">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    href="/signin"
                    className="rounded-md bg-primary px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Qaytadan urinib ko'ring
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WithLayout>
  );
};

export default function ErrorPage() {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    }>
      <ErrorContent />
    </Suspense>
  );
}
