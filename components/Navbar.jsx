"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-2">
                <Image
                  src={"/images/logo.png"}
                  width={56}
                  height={72}
                  alt="Prime analytica logo p"
                />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-[#020202] hover:text-red-600 px-3 py-2 rounded-md text-[28px] font-normal border-b-2 border-red-600"
              >
                Home
              </a>
              <a
                href="#business"
                className="text-[#020202] hover:text-red-600 px-3 py-2 rounded-md text-[28px] font-normal"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-[#020202] hover:text-red-600 px-3 py-2 rounded-md text-[28px] font-normal"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-[#020202] hover:text-red-600 px-3 py-2 rounded-md text-[28px] font-normal"
              >
                Contact us
              </a>
            </div>
          </div>
          <div className="hidden md:flex">
            <a
              href="/auth/sign-in"
              className="ml-4 px-4 py-2 rounded-md text-sm font-normal text-[24px] text-gray-800 border border-gray-400 hover:bg-gray-100"
            >
              Login
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-800 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium border-b-2 border-red-600"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact us
            </a>
            <a
              href="#"
              className="mt-4 block px-4 py-2 rounded-md text-base font-medium text-gray-800 border border-gray-400 hover:bg-gray-100 text-center"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
