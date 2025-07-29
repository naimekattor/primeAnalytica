// src/components/AccordionItem.jsx

import React from "react";

// Chevron Icon Component
const ChevronIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
      isOpen ? "transform rotate-180" : ""
    }`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-[#ebdddd] rounded-lg shadow-sm bg-white">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left p-4 sm:p-6 focus:outline-none"
      >
        <h3 className="text-base sm:text-lg font-medium text-gray-800">
          {question}
        </h3>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4 sm:p-6 border-t border-gray-200">
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
