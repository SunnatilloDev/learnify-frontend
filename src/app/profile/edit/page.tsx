'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import WithLayout from '@/components/with-layout/layout';
import { UserType } from '@prisma/client';

export default function EditProfilePage() {
  const { data: session, status, update: updateSession } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [userType, setUserType] = useState<UserType | "">(
    session?.user?.userType || ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    session?.user?.phoneNumber || ""
  );

  if (status === "loading") {
    return (
      <WithLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent"></div>
        </div>
      </WithLayout>
    );
  }

  if (status === "unauthenticated") {
    router.push("/signin");
    return null;
  }

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

      // Update the session with new data
      await updateSession({
        ...session,
        user: {
          ...session?.user,
          userType: data.userType,
          phoneNumber: data.phoneNumber,
        },
      });

      router.push("/profile");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Xatolik yuz berdi");
      console.error("Profile update error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <WithLayout>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Profilni tahrirlash
            </h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Profil ma'lumotlarini yangilash
            </p>

            {error && (
              <div className="mt-4 rounded bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/50 dark:text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
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

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  disabled={!userType || !phoneNumber || isSubmitting}
                  className={`rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 ${
                    isSubmitting || !userType || !phoneNumber
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                >
                  {isSubmitting ? "Saqlanmoqda..." : "Saqlash"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </WithLayout>
  );
}
