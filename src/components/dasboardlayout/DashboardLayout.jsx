"use client";

import { useState } from "react";
import Sidebar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-white text-black">
      
      {/* SIDEBAR COMPONENT */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        closeSidebar={() => setIsSidebarOpen(false)} 
      />

      {/* MAIN CONTENT WRAPPER */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto relative">
        
        {/* MOBILE/TABLET HEADER */}
        {/* Changed: md:hidden -> lg:hidden (Ab tablet par bhi header dikhega) */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-100 sticky top-0 z-30">
          <div className="flex items-center gap-2">
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
            <span className="font-bold text-lg text-gray-800">LookCheck</span>
          </div>
        </header>

        {/* PAGE CONTENT */}
        {/* Changed padding logic slightly for better Tablet view */}
        <main className="flex-1 p-4 lg:p-6 bg-white">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
        
      </div>
    </div>
  );
}