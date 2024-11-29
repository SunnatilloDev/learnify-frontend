"use client";

import { useState } from "react";

interface UserTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { userType: string; phoneNumber: string }) => void;
  loading?: boolean;
}

export default function UserTypeModal({
  isOpen,
  onClose,
  onSubmit,
  loading = false,
}: UserTypeModalProps) {
  const [userType, setUserType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!userType) {
      setError("Iltimos, foydalanuvchi turini tanlang");
      return;
    }
    if (!phoneNumber) {
      setError("Iltimos, telefon raqamingizni kiriting");
      return;
    }

    // Basic phone number format validation
    const uzPhoneRegex = /^\+998[0-9]{9}$/;
    if (!uzPhoneRegex.test(phoneNumber)) {
      setError("Telefon raqami noto'g'ri formatda. Masalan: +998901234567");
      return;
    }

    onSubmit({ userType, phoneNumber });
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow digits and plus sign
    if (!/^[0-9+]*$/.test(value)) {
      return;
    }
    setPhoneNumber(value);
    setError("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
      <div className="relative mx-auto w-full max-w-md p-4">
        <div className="relative rounded-lg bg-white p-6 shadow dark:bg-dark">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
              Qo'shimcha ma'lumotlar
            </h3>
            <p className="text-body-color dark:text-body-color-dark">
              Iltimos, quyidagi ma'lumotlarni to'ldiring
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="mb-3 block text-sm text-dark dark:text-white">
                Foydalanuvchi turi
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setUserType("STUDENT");
                    setError("");
                  }}
                  disabled={loading}
                  className={`flex-1 rounded-sm px-4 py-3 text-sm transition-all duration-300 ${
                    userType === "STUDENT"
                      ? "bg-primary text-white"
                      : "border border-stroke bg-[#f8f8f8] text-body-color hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-dark-3 dark:bg-[#2C303B] dark:text-body-color-dark dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary"
                  } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  O'quvchi
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setUserType("TEACHER");
                    setError("");
                  }}
                  disabled={loading}
                  className={`flex-1 rounded-sm px-4 py-3 text-sm transition-all duration-300 ${
                    userType === "TEACHER"
                      ? "bg-primary text-white"
                      : "border border-stroke bg-[#f8f8f8] text-body-color hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-dark-3 dark:bg-[#2C303B] dark:text-body-color-dark dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary"
                  } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  O'qituvchi
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="phoneNumber"
                className="mb-3 block text-sm text-dark dark:text-white"
              >
                Telefon raqam
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="+998901234567"
                disabled={loading}
                className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {error && (
              <div className="mb-6 rounded-lg bg-red-50 p-4 dark:bg-red-900/50">
                <p className="text-sm font-medium text-red-800 dark:text-red-200">
                  {error}
                </p>
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base font-medium text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-sm bg-primary px-6 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <svg
                    className="mx-auto h-5 w-5 animate-spin text-white"
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
                  "Saqlash"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
