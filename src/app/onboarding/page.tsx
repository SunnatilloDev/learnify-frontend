'use client';

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { UserType } from "@prisma/client";
import WithLayout from "@/components/with-layout/layout";

export default function Onboarding() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userType, setUserType] = useState<UserType | "">("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // If user is not authenticated, redirect to sign in
    if (status === "unauthenticated") {
      router.push("/signin");
      return;
    }

    // If user has completed onboarding, redirect to welcome page
    if (status === "authenticated" && session.user && !session.user.needsOnboarding) {
      router.push("/welcome");
    }
  }, [status, session, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/user/complete-onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userType,
          phoneNumber,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Xatolik yuz berdi");
      }

      router.push("/welcome");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Xatolik yuz berdi");
      console.error("Onboarding error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show loading state while checking authentication
  if (status === "loading") {
    return (
      <WithLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent"></div>
        </div>
      </WithLayout>
    );
  }

  // Show error if not authenticated
  if (status === "unauthenticated") {
    return null; // Will redirect in useEffect
  }

  return (
    <WithLayout>
      <div className="flex min-h-[60vh] items-center justify-center py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800/90">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Profilni to'ldiring
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              O'zingiz haqingizda qisqacha ma'lumot bering
            </p>
          </div>

          {error && (
            <div className="mt-4 rounded bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/50 dark:text-red-400">
              {error}
            </div>
          )}
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Men...
              </label>
              <div className="mt-2 space-y-4">
                <button
                  type="button"
                  onClick={() => setUserType(UserType.TEACHER)}
                  className={
                    userType === UserType.TEACHER
                      ? "w-full flex justify-center py-3 px-4 border rounded-lg text-sm font-medium border-indigo-500 text-indigo-600 bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:bg-indigo-900/50"
                      : "w-full flex justify-center py-3 px-4 border rounded-lg text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                  }
                >
                  O'qituvchiman
                </button>
                <button
                  type="button"
                  onClick={() => setUserType(UserType.STUDENT)}
                  className={
                    userType === UserType.STUDENT
                      ? "w-full flex justify-center py-3 px-4 border rounded-lg text-sm font-medium border-indigo-500 text-indigo-600 bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:bg-indigo-900/50"
                      : "w-full flex justify-center py-3 px-4 border rounded-lg text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                  }
                >
                  O'quvchiman
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Telefon raqam
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                  placeholder="+998 90 123 45 67"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={!userType || !phoneNumber || isSubmitting}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white transition-colors ${
                  isSubmitting
                    ? "bg-indigo-400 dark:bg-indigo-500"
                    : "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? "Yuborilmoqda..." : "Davom etish"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </WithLayout>
  );
}
