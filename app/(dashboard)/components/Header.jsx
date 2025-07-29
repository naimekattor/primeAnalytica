import React from "react";
import { UserProfile } from "./UserProfile";
import Link from "next/link";

export default function Header({ setSidebarOpen }) {
  return (
    <header className="flex-shrink-0 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Mobile menu button */}
        {/* <button
          className="lg:hidden text-gray-500 hover:text-gray-600"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> */}

        {/* Spacer */}
        <div className="flex-1">
          <Link href={"/"}>
            <img
              src="/images/logo.png"
              className="w-[80px] h-[80px]"
              alt="logo"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {/* Placeholder for notification icon */}
          <div className="relative">
            <svg
              className="h-6 w-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </div>

          {/* User Profile Dropdown */}
          <UserProfile />
        </div>
      </div>
    </header>
  );
}
