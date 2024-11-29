"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import WithLayout from "@/components/with-layout/layout";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <WithLayout>
        <div className="flex min-h-[calc(100vh-72px)] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent"></div>
        </div>
      </WithLayout>
    );
  }

  if (status === "unauthenticated") {
    router.replace("/auth/signin");
    return null;
  }

  return (
    <WithLayout>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
          <div className="relative h-32 bg-indigo-600">
            <div className="absolute -bottom-16 left-4">
              <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white dark:border-gray-800">
                <Image
                  src={session?.user?.image || "/images/avatar-placeholder.png"}
                  alt={session?.user?.name || "Profile"}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-16 px-4 py-5 sm:p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                  <p className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                    {session?.user?.name}
                  </p>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {session?.user?.email}
                  </p>
                </div>
              </div>
              <div className="mt-4 sm:ml-4 sm:mt-0">
                <Link
                  href="/profile/edit"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  Profilni tahrirlash
                </Link>
              </div>
            </div>
            <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-lg bg-gray-50 px-4 py-5 dark:bg-gray-700/50">
                <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                  Foydalanuvchi turi
                </dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {session?.user?.userType === "TEACHER"
                    ? "O'qituvchi"
                    : "O'quvchi"}
                </dd>
              </div>
              <div className="overflow-hidden rounded-lg bg-gray-50 px-4 py-5 dark:bg-gray-700/50">
                <dt className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                  Telefon raqam
                </dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {session?.user?.phoneNumber || "Ko'rsatilmagan"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </WithLayout>
  );
}
