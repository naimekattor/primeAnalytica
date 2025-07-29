import React from "react";

// Reusable icons for actions
const ActionIcons = () => (
  <div className="flex items-center space-x-3 text-gray-500 mt-3">
    <button className="hover:text-gray-800">
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
          strokeWidth={1.5}
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.25a14.98 14.98 0 00-5.84 7.38m5.84 2.58v4.8m0-11.13v-2.81a6 6 0 0111.68 0v2.81"
        />
      </svg>
    </button>
    <button className="hover:text-gray-800">
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
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    </button>
    <button className="hover:text-gray-800">
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
          strokeWidth={1.5}
          d="M4 4v5h5M20 20v-5h-5M4 4l5 5M20 20l-5-5"
        />
      </svg>
    </button>
    <button className="hover:text-gray-800">
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
          strokeWidth={1.5}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.97l-2.714 5.428a2 2 0 001.736 2.97h4.615a2 2 0 001.995-1.858z"
        />
      </svg>
    </button>
  </div>
);

// Link Card component
const LinkCard = ({ linkData }) => (
  <div className="border border-gray-700 rounded-lg overflow-hidden">
    <div className="p-3 bg-gray-800">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-white">{linkData.title}</h3>
        <svg
          className="w-5 h-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      </div>
      <p className="text-sm text-gray-400">{linkData.description}</p>
    </div>
    <div className="p-3 bg-black">
      <a
        href={linkData.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-300 hover:underline"
      >
        {linkData.url}
      </a>
    </div>
  </div>
);

const MessageBubble = ({
  sender,
  avatar,
  message,
  timestamp,
  type,
  linkData,
  actions,
}) => {
  const isUser = sender === "user";

  const renderMessage = () => {
    if (type === "link") {
      return <LinkCard linkData={linkData} />;
    }

    // Handle numbered lists
    const parts = message.split(/(\d\.)/g);
    const renderedParts = [];
    for (let i = 0; i < parts.length; i += 2) {
      renderedParts.push(parts[i]);
      if (parts[i + 1]) {
        renderedParts.push(<br key={`br-${i}`} />);
        renderedParts.push(<span key={`span-${i}`}>{parts[i + 1]}</span>);
      }
    }

    return <p className="whitespace-pre-wrap">{renderedParts}</p>;
  };

  if (isUser) {
    return (
      <div className="flex items-end justify-end gap-3">
        <div className="order-1">
          <div
            className={`p-3 rounded-lg ${
              type === "link" ? "bg-transparent" : "bg-black text-white"
            }`}
          >
            {renderMessage()}
          </div>
          <div className="text-xs text-gray-400 text-right mt-1">
            {timestamp}
          </div>
        </div>
        <img
          src={avatar}
          alt="User Avatar"
          className="w-8 h-8 rounded-full order-2"
        />
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0">
        <svg
          className="w-5 h-5 text-red-500"
          viewBox="0 0 102 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M63.088 0L0 63.088V123L31.544 91.456V63.088L63.088 31.544L102 70.456V4.544L63.088 0Z"
            fill="currentColor"
          />
          <path
            d="M31.544 63.088L63.088 94.632L102 55.72V0L31.544 63.088Z"
            fill="#1A202C"
          />
        </svg>
      </div>
      <div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          {renderMessage()}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400 mt-1">{timestamp}</span>
          {/* {actions && <ActionIcons />} */}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
