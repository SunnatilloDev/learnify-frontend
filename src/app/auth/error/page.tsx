'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import WithLayout from '@/components/with-layout/layout';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  let errorMessage = 'Xatolik yuz berdi';
  if (error === 'OAuthAccountNotLinked') {
    errorMessage = 'Bu email manzil boshqa usul bilan ro\'yxatdan o\'tgan. Iltimos, avval ishlatilgan usul bilan kiring.';
  }

  return (
    <WithLayout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800/90">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Xatolik
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {errorMessage}
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/signin"
              className="flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Qaytadan urinib ko'ring
            </Link>
          </div>
        </div>
      </div>
    </WithLayout>
  );
}
