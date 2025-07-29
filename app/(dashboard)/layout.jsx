"use client";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatWidget from "./components/ChatWidget";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Reusable Sidebar Component */}
      {pathname === "/chat" && (
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      )}

      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Reusable Header Component */}
        {pathname !== "/chat" && <Header setSidebarOpen={setSidebarOpen} />}

        {/* Main Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {pathname !== "/chat" && (
            <div className="py-6">
              <Button href={"/document-solution-chooser"}>
                Back to Options
              </Button>
            </div>
          )}
          {children}
        </main>
      </div>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </div>
  );
}
