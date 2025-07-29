import React from "react";
import Link from "next/link";

// Logo Component
const Logo = () => (
  <div className="mx-auto h-12 w-auto text-center flex items-center justify-center">
    <img src="/images/logo1.png" alt="" />
    <div className="text-xl font-bold text-gray-800 tracking-wide">
      PrimeAnalytica
      <p className="text-xs text-red-500">Analytics-driven transformation</p>
    </div>
  </div>
);

// Back Button Component
const BackButton = () => (
  <Link
    href="/auth/sign-in"
    className="absolute top-8 left-8 text-sm text-gray-600 hover:text-gray-900 flex items-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
    Back
  </Link>
);

const AuthCard = ({ children, showBack = false }) => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-md w-full bg-white p-8 sm:p-10 rounded-xl shadow-lg">
        {showBack && <BackButton />}
        <div className="mb-8">
          <Logo />
        </div>
        {children}
      </div>
    </main>
  );
};

export default AuthCard;
