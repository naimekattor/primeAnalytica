"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChangeEmailModal from "@/components/modals/ChangeEmailModal";
import ChangePasswordModal from "@/components/modals/ChangePasswordModal";
import LogoutModal from "@/components/modals/LogoutModal";

// Mock user data
const user = {
  name: "Jubayer Ahmad",
  email: "ahmad.jubayer@gmail.com",
  imageUrl: "https://i.pravatar.cc/40?u=jubayer", // Placeholder avatar
};

export const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEmailModalOpen, setEmailModalOpen] = useState(false);
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2"
        >
          <img className="h-9 w-9 rounded-full" src={user.imageUrl} alt="" />
          <div className="text-left hidden sm:block">
            <p className="text-sm font-medium text-gray-800">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <button
                  onClick={() => {
                    setEmailModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Change Email
                </button>
                <button
                  onClick={() => {
                    setPasswordModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
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
                  Change password
                </button>
                <button
                  onClick={() => {
                    setLogoutModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H3"
                    />
                  </svg>
                  Log out
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modals */}
      <ChangeEmailModal
        isOpen={isEmailModalOpen}
        setIsOpen={setEmailModalOpen}
      />
      <ChangePasswordModal
        isOpen={isPasswordModalOpen}
        setIsOpen={setPasswordModalOpen}
      />
      <LogoutModal isOpen={isLogoutModalOpen} setIsOpen={setLogoutModalOpen} />
    </>
  );
};
