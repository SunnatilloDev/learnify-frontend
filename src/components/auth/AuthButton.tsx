"use client";

import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

  /**
   * The AuthButton component displays a button that allows the user to sign in,
   * sign out, or view their profile. If the user is not authenticated, the button
   * displays a dropdown menu with options to sign in with Google or email.
   * If the user is authenticated, the button displays a dropdown menu with options
   * to view their profile or sign out.
   *
   * @returns The AuthButton component
   */
export const AuthButton = () => {
  const { user, isAuthenticated, isLoading, signOut } = useAuth();

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
      <Menu as="div" className="relative">
        <Menu.Button className="flex items-center gap-4 rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name || "User"}
              width={32}
              height={32}
              className="rounded-full"
            />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-white">
              {user.name?.charAt(0).toUpperCase() || "U"}
            </div>
          )}
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-black dark:text-white">
              {user.name}
            </span>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {user.email}
            </span>
          </div>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/profile"
                  className={`${
                    active ? "bg-gray-100 dark:bg-gray-700" : ""
                  } block px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                >
                  Profil
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => signOut()}
                  className={`${
                    active ? "bg-gray-100 dark:bg-gray-700" : ""
                  } block w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200`}
                >
                  Chiqish
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Menu as="div" className="relative">
        <Menu.Button className="rounded-lg bg-primary/90 px-6 py-3 text-base font-medium text-white transition hover:bg-primary">
          Kirish
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:divide-gray-700">
            <div className="px-4 py-3">
              <p className="text-sm text-gray-900 dark:text-white">Kirish usuli</p>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => signIn("google", { callbackUrl: "/welcome" })}
                    className={`${
                      active ? "bg-gray-100 dark:bg-gray-700" : ""
                    } flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                  >
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                      alt="Google"
                      width={20}
                      height={20}
                      className="mr-3"
                    />
                    Google orqali kirish
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/signin"
                    className={`${
                      active ? "bg-gray-100 dark:bg-gray-700" : ""
                    } flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                  >
                    <svg
                      className="mr-3 h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Email orqali kirish
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/signup"
                    className={`${
                      active ? "bg-gray-100 dark:bg-gray-700" : ""
                    } block px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                  >
                    Ro'yxatdan o'tish
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
