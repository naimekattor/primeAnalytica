import React from "react";
import Link from "next/link";

const Button = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-4 py-2 bg-white border border-gray-300
 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none
 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      {children}
    </Link>
  );
};

export default Button;
