'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const userTypeImage = session?.user?.userType === "TEACHER" 
    ? "https://cdn-icons-png.flaticon.com/512/1205/1205526.png"
    : "https://cdn-icons-png.flaticon.com/512/3135/3135810.png";

  const nextSteps = session?.user?.userType === "TEACHER" 
    ? [
        { title: "Profilingizni to'ldiring", description: "O'quvchilar sizni topishlari uchun profilingizni to'ldiring", link: "/profile/edit" },
        { title: "Kurslar yarating", description: "Yangi kurslar yarating va o'quvchilarni jalb qiling", link: "/courses/create" },
        { title: "Darslar jadvali", description: "Darslar jadvalini rejalashtiring", link: "/schedule" },
      ]
    : [
        { title: "Profilingizni to'ldiring", description: "Yaxshiroq o'rganish tajribasi uchun profilingizni to'ldiring", link: "/profile/edit" },
        { title: "Kurslarni ko'ring", description: "Barcha mavjud kurslarni ko'rib chiqing", link: "/courses" },
        { title: "O'qituvchilarni toping", description: "Malakali o'qituvchilarni toping", link: "/teachers" },
      ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="relative mx-auto h-32 w-32 mb-8">
            <Image
              src={userTypeImage}
              alt="Profile"
              fill
              className="rounded-full object-cover shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Xush kelibsiz, {session?.user?.name}!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {session?.user?.userType === "TEACHER" 
              ? "Learnify platformasida o'qituvchi sifatida faoliyatingizni boshlang"
              : "Learnify platformasida o'quvchi sifatida sayohatingizni boshlang"}
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Keyingi qadamlar
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {nextSteps.map((step, index) => (
              <Link 
                key={index}
                href={step.link}
                className="group relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-primary rounded-l-lg"></div>
                <div className="relative pl-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
          >
            Boshqaruv paneliga o'tish
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
