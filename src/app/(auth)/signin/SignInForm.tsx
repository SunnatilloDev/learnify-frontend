"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function SignInForm() {
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Xush kelibsiz
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          O'quv jarayonini davom ettirish uchun tizimga kiring
        </p>
      </div>

      <div className="mt-8">
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => signIn()}
          className="relative flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20">
            <g fill="none">
              <path d="M17.876 10.284c0-.574-.052-1.127-.149-1.658H10.1v3.14h4.36a3.726 3.726 0 01-1.617 2.444v2.033h2.618c1.531-1.41 2.415-3.487 2.415-5.959z" fill="#4285F4"/>
              <path d="M10.1 18.2c2.187 0 4.02-.725 5.36-1.957l-2.617-2.033c-.725.486-1.653.773-2.743.773-2.11 0-3.895-1.424-4.532-3.339H2.862v2.099C4.192 16.462 6.97 18.2 10.1 18.2z" fill="#34A853"/>
              <path d="M5.568 11.644c-.162-.486-.254-1.006-.254-1.544 0-.538.092-1.058.254-1.544V6.457H2.862A8.207 8.207 0 002 10.1c0 1.323.314 2.577.862 3.686l2.706-2.142z" fill="#FBBC05"/>
              <path d="M10.1 5.317c1.19 0 2.257.408 3.096 1.21L15.52 4.203C14.182 2.971 12.35 2.2 10.1 2.2c-3.13 0-5.91 1.738-7.238 4.257l2.706 2.142c.637-1.915 2.422-3.339 4.532-3.339z" fill="#EA4335"/>
            </g>
          </svg>
          Google bilan davom etish
        </motion.button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              Yoki elektron pochta orqali
            </span>
          </div>
        </div>
      </div>

      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Elektron pochta
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="misol@misol.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Parol
          </label>
          <div className="relative mt-1">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 pr-10 text-gray-900 placeholder-gray-500 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:focus:ring-offset-gray-800"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Meni eslab qol
            </label>
          </div>

          <div className="text-sm">
            <Link href="#" className="font-medium text-primary hover:underline">
              Parolni unutdingizmi?
            </Link>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="flex w-full justify-center rounded-lg bg-primary px-8 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          Kirish
        </motion.button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        Hisobingiz yo'qmi?{" "}
        <Link href="/signup" className="font-medium text-primary hover:underline">
          Ro'yxatdan o'tish
        </Link>
      </p>
    </div>
  );
}
