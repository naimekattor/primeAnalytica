"use client";
import React from "react";
import { chatData } from "./chatData";
import ChatPanel from "../components/ChatPanel";
import ChatSidebar from "../components/ChatSidebar";

const ChatPage = () => {
  return (
    // Use a negative margin to make the component fill the layout's padding
    <div className="-m-4 sm:-m-6 lg:-m-8 h-[calc(100vh-4rem)] flex">
      {/* Sidebar for chat history */}
      {/* <ChatSidebar /> */}

      {/* Main chat panel */}
      <ChatPanel messages={chatData} />
    </div>
  );
};

export default ChatPage;
