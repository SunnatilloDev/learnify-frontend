"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import WithLayout from "@/components/with-layout/layout";

const SignInPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/profile");
    }
  }, [status, router]);

  // If loading, show loading state
  if (status === "loading") {
    return (
      <WithLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent"></div>
        </div>
      </WithLayout>
    );
  }

  // If authenticated, don't render anything (will be redirected by useEffect)
  if (status === "authenticated") {
    return null;
  }

  return (
    <WithLayout>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800/90">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              Tizimga kirish
            </h2>
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              O'z Google hisobingiz orqali tizimga kiring
            </p>
          </div>
          
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            <Image
              src="/images/google.svg"
              alt="Google logo"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            Google orqali kirish
          </button>
        </div>
      </div>
    </WithLayout>
  );
};

export default SignInPage;
