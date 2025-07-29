import React from "react";

const ChatSidebar = () => {
  return (
    <aside className=" md:flex flex-col  bg-white  ">
      <div className="p-4 flex-shrink-0">
        <button className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span>New Chat</span>
        </button>
        <div className="relative mt-4">
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
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {/* Chat history list would go here */}
        <p className="p-4 text-sm text-gray-400">Chat history...</p>
      </div>
    </aside>
  );
};

export default ChatSidebar;
