"use client";

import { Menu, Transition } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function ProfileMenu() {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <Menu as="div" className="relative ml-3">
      <Menu.Button className="flex items-center gap-x-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <span className="sr-only">Open user menu</span>
        <div className="relative h-8 w-8 overflow-hidden rounded-full">
          <Image
            src={session?.user?.image || "/images/avatar-placeholder.png"}
            alt={session?.user?.name || "User"}
            fill
            className="object-cover"
          />
        </div>
        <span className="hidden text-sm font-medium text-gray-700 dark:text-gray-200 md:block">
          {session?.user?.name}
        </span>
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
          <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
            <div className="font-medium">{session.user.name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {session.user.email}
            </div>
          </div>
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
              <Link
                href="/profile/edit"
                className={`${
                  active ? "bg-gray-100 dark:bg-gray-700" : ""
                } block px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
              >
                Profilni tahrirlash
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
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
