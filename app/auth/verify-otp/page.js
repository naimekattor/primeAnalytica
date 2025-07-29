"use client";
import React from "react";
import Link from "next/link";
import AuthCard from "../components/AuthCard";
import OtpInput from "../components/OtpInput";

const VerifyOtpPage = () => {
  return (
    <AuthCard showBack={true}>
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Verify OTP
        </h2>
        <p className="text-sm text-gray-500 mt-2 max-w-xs mx-auto">
          We'll send a verification code to your email. Check your inbox and
          enter the code here.
        </p>
      </div>

      <form className="space-y-8">
        <OtpInput length={5} />
        <div className="text-center text-sm">
          <p className="text-gray-600">
            Didn't receive code?{" "}
            <button
              type="button"
              className="font-medium text-red-600 hover:text-red-500 underline"
            >
              Resend
            </button>
          </p>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-gray-800 rounded-md shadow-sm text-sm font-medium text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Verify
          </button>
        </div>
      </form>
    </AuthCard>
  );
};

export default VerifyOtpPage;
