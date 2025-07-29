"use client";
import React from "react";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";

const UpdatePasswordPage = () => {
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
    <AuthCard showBack={true}>
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Update Password
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Secure your account by updating your password.
        </p>
      </div>

      <form className="space-y-6">
        <InputField
          id="new-password"
          label="New password"
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
            Update Password
          </button>
        </div>
      </form>
    </AuthCard>
  );
};

export default UpdatePasswordPage;
