"use client";

import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";

export const AuthButton = () => {
  const { user, isAuthenticated, isLoading, signIn, signOut } = useAuth();

  if (isLoading) {
    return (
      <button
        disabled
        className="flex items-center justify-center gap-2 rounded-lg bg-primary/90 px-6 py-3 text-base font-medium text-white transition hover:bg-primary"
      >
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
        Loading...
      </button>
    );
  }

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-4">
        {user.image && (
          <Image
            src={user.image}
            alt={user.name || "User"}
            width={32}
            height={32}
            className="rounded-full"
          />
        )}
        <div className="flex flex-col">
          <span className="text-sm font-medium text-black dark:text-white">
            {user.name}
          </span>
          <button
            onClick={() => signOut()}
            className="text-left text-sm text-gray-600 hover:text-primary dark:text-gray-400"
          >
            Chiqish
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="rounded-lg bg-primary/90 px-6 py-3 text-base font-medium text-white transition hover:bg-primary"
    >
      Kirish
    </button>
  );
};
