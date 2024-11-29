"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useAuth } from "@/hooks/useAuth";
import UserTypeModal from "./UserTypeModal";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const { /* signIn */ } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    acceptTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showUserTypeModal, setShowUserTypeModal] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/welcome" });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Iltimos, ismingizni kiriting");
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Noto'g'ri email formati");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Parol kamida 6 ta belgidan iborat bo'lishi kerak");
      return false;
    }

    if (!formData.acceptTerms) {
      setError("Iltimos, foydalanish shartlari va maxfiylik siyosati bilan tanishing");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      // Save initial registration data temporarily
      setShowUserTypeModal(true);
    } catch (err) {
      setError("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  const handleUserTypeSubmit = async (data: {
    userType: string;
    phoneNumber: string;
  }) => {
    setLoading(true);
    setError("");
    
    try {
      // Validate phone number for Uzbekistan format
      const uzPhoneRegex = /^\+998[0-9]{9}$/;
      if (!uzPhoneRegex.test(data.phoneNumber)) {
        throw new Error("Telefon raqami noto'g'ri formatda. Masalan: +998901234567");
      }

      // Combine initial form data with user type data
      const registerResponse = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userType: data.userType,
          phoneNumber: data.phoneNumber,
        }),
      });

      const responseData = await registerResponse.json();

      if (!registerResponse.ok) {
        if (responseData.error === "EMAIL_EXISTS") {
          throw new Error("Bu email allaqachon ro'yxatdan o'tgan");
        }
        throw new Error(responseData.error || "Ro'yxatdan o'tishda xatolik yuz berdi");
      }

      // After successful registration, sign in the user
      const signInResult = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
        callbackUrl: "/welcome"
      });

      if (signInResult?.error) {
        throw new Error("Tizimga kirishda xatolik yuz berdi");
      }

      setRegistrationSuccess(true);
      setShowUserTypeModal(false);
      router.push("/welcome");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ro'yxatdan o'tishda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  if (registrationSuccess) {
    return (
      <div className="text-center">
        <h3 className="mb-3 text-xl font-bold text-green-600 dark:text-green-400">
          Ro'yxatdan o'tish muvaffaqiyatli yakunlandi!
        </h3>
        <p className="mb-4 text-body-color dark:text-body-color-dark">
          Tizimga kirish sahifasiga yo'naltirilmoqdasiz...
        </p>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={handleGoogleSignIn}
        className="border-stroke mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base font-medium text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary"
      >
        <span className="mr-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_95:967)">
              <path
                d="M20.0001 10.2216C20.0001 9.53416 19.9294 8.86776 19.7881 8.22776H10.2001V12.0938H15.8001C15.5881 13.3188 14.8881 14.3838 13.8501 15.0838V17.5938H17.1951C19.1001 15.8438 20.0001 13.2738 20.0001 10.2216Z"
                fill="#4285F4"
              />
              <path
                d="M10.2 20.0001C12.9 20.0001 15.17 19.1151 17.195 17.5938L13.85 15.0838C12.925 15.6838 11.7 16.0201 10.2 16.0201C7.545 16.0201 5.3 14.2638 4.525 11.9001H1.075V14.4901C3.1 17.7901 6.425 20.0001 10.2 20.0001Z"
                fill="#34A853"
              />
              <path
                d="M4.525 11.9C4.325 11.3 4.225 10.6563 4.225 10C4.225 9.34375 4.325 8.7 4.525 8.1V5.51001H1.075C0.375 6.86001 0 8.39375 0 10C0 11.6063 0.375 13.14 1.075 14.49L4.525 11.9Z"
                fill="#FBBC05"
              />
              <path
                d="M10.2 3.97994C11.7 3.97994 13.05 4.48994 14.125 5.52994L17.075 2.57994C15.17 0.979941 12.9 -0.0200586 10.2 -0.0200586C6.425 -0.0200586 3.1 2.20994 1.075 5.50994L4.525 8.09994C5.3 5.73994 7.545 3.97994 10.2 3.97994Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_95:967">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        Google orqali ro'yxatdan o'tish
      </button>

      <div className="my-8 flex items-center">
        <div className="h-px w-full bg-gray-200 dark:bg-gray-700"></div>
        <p className="mx-4 text-gray-400">yoki</p>
        <div className="h-px w-full bg-gray-200 dark:bg-gray-700"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="mb-8">
          <label
            htmlFor="name"
            className="mb-3 block text-sm text-dark dark:text-white"
          >
            Ism Familiya
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ism Familiyangizni kiriting"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            required
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="email"
            className="mb-3 block text-sm text-dark dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Elektron pochtangizni kiriting"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            required
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="password"
            className="mb-3 block text-sm text-dark dark:text-white"
          >
            Parol
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Parolingizni kiriting"
            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            required
          />
        </div>

        <div className="mb-8 flex">
          <label
            htmlFor="acceptTerms"
            className="flex cursor-pointer select-none text-sm text-body-color"
          >
            <div className="relative">
              <input
                type="checkbox"
                id="acceptTerms"
                checked={formData.acceptTerms}
                onChange={(e) =>
                  setFormData({ ...formData, acceptTerms: e.target.checked })
                }
                className="sr-only"
              />
              <div className="box border-stroke dark:border-dark-3 mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border">
                <span
                  className={formData.acceptTerms ? "opacity-100" : "opacity-0"}
                >
                  <svg
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                      strokeWidth="0.4"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <span>
              Men{" "}
              <a href="#0" className="text-primary hover:underline">
                Foydalanish shartlari
              </a>{" "}
              va{" "}
              <a href="#0" className="text-primary hover:underline">
                Maxfiylik siyosati
              </a>{" "}
              bilan tanishdim
            </span>
          </label>
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/50">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800 dark:text-red-200">
                  {error}
                </p>
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-submit-dark"
        >
          {loading ? (
            <svg
              className="h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Ro'yxatdan o'tish"
          )}
        </button>
      </form>

      <UserTypeModal
        isOpen={showUserTypeModal}
        onClose={() => {
          setShowUserTypeModal(false);
          setLoading(false);
          setError("");
        }}
        onSubmit={(data) => handleUserTypeSubmit(data)}
        loading={loading}
      />
    </>
  );
}
