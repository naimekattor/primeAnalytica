"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-black text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-gray-800 transition-all"
      >
        <svg
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-xl shadow-2xl flex flex-col z-50"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b bg-gray-50 rounded-t-xl">
          <div className="font-semibold">ChatBot</div>
          <div className="flex items-center space-x-2">
            <button onClick={() => router.push("/chat")} title="Expand Chat">
              <svg
                className="w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5"
                />
              </svg>
            </button>
            <button onClick={() => setIsOpen(false)} title="Minimize Chat">
              <svg
                className="w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {/* Example Messages */}
          <div className="flex justify-start">
            <div className="bg-gray-200 text-sm p-3 rounded-lg max-w-xs">
              Hi, how can I help you?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-black text-white text-sm p-3 rounded-lg max-w-xs">
              How are you?
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-gray-200 text-sm p-3 rounded-lg max-w-xs">
              Fine, Thanks! How can I help you?
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="p-3 border-t">
          <input
            type="text"
            placeholder="Ask your question..."
            className="w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
