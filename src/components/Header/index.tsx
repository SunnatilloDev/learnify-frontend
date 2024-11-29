"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import ProfileMenu from "../profile-menu";
import { AuthButton } from "@/components/auth/AuthButton";

const Header = () => {
  const { status } = useSession();
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header
      className={`header top-0 z-40 flex w-full items-center bg-transparent ${
        sticky
          ? "fixed !bg-white !bg-opacity-50 shadow-sticky backdrop-blur-sm transition dark:!bg-gray-dark dark:!bg-opacity-80 dark:shadow-sticky-dark"
          : "absolute"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-5 lg:py-2" : "py-8"
              }`}
            >
              <Image
                src="/images/logo/logo-2.svg"
                alt="logo"
                width={140}
                height={30}
                className="w-full dark:hidden"
              />
              <Image
                src="/images/logo/logo.svg"
                alt="logo"
                width={140}
                height={30}
                className="hidden w-full dark:block"
              />
            </Link>
          </div>

          <div className="flex  flex-none items-center justify-between px-4 lg:flex-1">
            <nav className="hidden lg:ml-12 lg:block">
              <ul className="flex space-x-12">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className="flex py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                      >
                        {menuItem.title}
                      </Link>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center justify-end space-x-4">
              {status === "authenticated" ? <ProfileMenu /> : <AuthButton />}
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="relative block rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[-8px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <nav
          id="navbarCollapse"
          className={`navbar absolute left-0 right-0 z-30 mt-4 rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:hidden ${
            navbarOpen
              ? "visible top-full opacity-100"
              : "invisible top-[120%] opacity-0"
          }`}
        >
          <ul className="block space-y-4">
            {menuData.map((menuItem, index) => (
              <li key={index} className="group relative">
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    className="flex py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white"
                  >
                    {menuItem.title}
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
