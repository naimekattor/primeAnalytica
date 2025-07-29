import React, { useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

const ChatPanel = ({ messages }) => {
  const messagesEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} {...msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200">
        <ChatInput />
        <p className="text-xs text-center text-gray-400 mt-2">
          ChatGPT can make mistakes. Check important info.
        </p>
      </div>
    </div>
  );
};

export default ChatPanel;
