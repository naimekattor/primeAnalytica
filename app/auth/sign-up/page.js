"use client";
import React from "react";
import Link from "next/link";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";

const SignUpPage = () => {
  const MailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206"
      />
    </svg>
  );
  const LockIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );

  return (
    <AuthCard>
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Hello, Welcome!
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Please Enter Your Details Below to Register
        </p>
      </div>

      <form className="space-y-6">
        <InputField
          id="email"
          label="Email"
          type="email"
          placeholder="Email"
          icon={MailIcon}
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="New password"
          icon={LockIcon}
        />
        <InputField
          id="confirm-password"
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          icon={LockIcon}
        />

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-gray-800 rounded-md shadow-sm text-sm font-medium text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Register
          </button>
        </div>
      </form>

      <p className="mt-8 text-center text-sm text-gray-600">
        Do you have an account?{" "}
        <Link
          href="/auth/sign-in"
          className="font-medium text-red-600 hover:text-red-500"
        >
          Sign In
        </Link>
      </p>
    </AuthCard>
  );
};

export default SignUpPage;
