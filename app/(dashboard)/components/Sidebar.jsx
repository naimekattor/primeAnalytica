"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ChatSidebar from "./ChatSidebar";

const navigation = [
  { name: "Contract", href: "/dashboard" },
  { name: "Sales", href: "/sales" },
  { name: "CVS", href: "/cvs" },
];

// Logo Component
const Logo = () => (
  <Link href={"dashboard"}>
    <div className="mx-auto h-12 w-auto text-center flex items-center justify-center">
      <img src="/images/logo1.png" alt="" />
      <div className="text-xl font-bold text-gray-800 tracking-wide">
        PrimeAnalytica
        <p className="text-[10px] text-red-500">
          Analytics-driven transformation
        </p>
      </div>
    </div>
  </Link>
);

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      {/* Mobile sidebar overlay */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-30 lg:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-4 z-40 transform lg:relative lg:translate-x-0 lg:inset-0 transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="mb-8">
            <Logo />
          </div>

          {pathname === "/chat" ? (
            <ChatSidebar />
          ) : (
            <>
              {/* Search Input */}
              {/* <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Type to search"
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div> */}

              {/* Navigation */}
              {/* <nav className="flex-1">
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Services
                </p>
                <ul className="space-y-2">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                          pathname === item.href
                            ? "bg-black text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav> */}
            </>
          )}
        </div>
      </div>
    </>
  );
}
