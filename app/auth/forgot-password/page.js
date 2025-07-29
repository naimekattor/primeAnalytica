"use client";
import React from "react";
import AuthCard from "../components/AuthCard";
import InputField from "../components/InputField";

const ForgotPasswordPage = () => {
  return (
    <AuthCard showBack={true}>
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-500 mt-2 max-w-xs mx-auto">
          Enter the email address associated with your account. We&apos;ll send
          you an OTP to your email.
        </p>
      </div>

      <form className="space-y-6">
        <InputField id="email" label="Email" type="email" placeholder="Email" />

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-gray-800 rounded-md shadow-sm text-sm font-medium text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Send OTP
          </button>
        </div>
      </form>
    </AuthCard>
  );
};

export default ForgotPasswordPage;
