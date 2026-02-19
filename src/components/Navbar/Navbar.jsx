"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SparklesIcon as SparklesIconSolid } from "@heroicons/react/24/solid";
import {
  Squares2X2Icon,
  CreditCardIcon,
  DocumentTextIcon,
  SparklesIcon,
  CubeIcon,
  Cog6ToothIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar({ isOpen, closeSidebar }) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/", icon: Squares2X2Icon },
    { name: "Subscriptions", href: "/subscriptions", icon: CreditCardIcon },
    { name: "Billing & Invoices", href: "/billing", icon: DocumentTextIcon },
    { name: "Generate", href: "/generate", icon: SparklesIcon },
    { name: "Packages", href: "/packages", icon: CubeIcon },
    { name: "Settings", href: "/settings", icon: Cog6ToothIcon },
  ];

  return (
    <>
      {/* MOBILE OVERLAY (Black Background) */}
      
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      ></div>

      {/* SIDEBAR CONTAINER */}
      
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 bg-[#13131a] text-gray-400 flex flex-col p-5 border-r border-gray-800/50 overflow-y-auto font-sans transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static
        `}
      >
        {/* LOGO SECTION */}
        <div className="flex items-center justify-between mb-10 px-2 py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-linear-to-tr from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30">
              <div className="absolute inset-0 bg-white/20 blur-md rounded-xl"></div>
              <SparklesIconSolid className="w-6 h-6 relative z-10" />
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              LookCheck
            </h1>
          </div>

          {/* Close Button */}
          
          <button
            onClick={closeSidebar}
            className="lg:hidden p-1 text-gray-400 hover:text-white"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="grow">
          <ul className="flex flex-col gap-2 font-medium">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name} className={item.name === "Settings" ? "mt-4" : ""}>
                  <Link
                    href={item.href}
                    onClick={closeSidebar}
                    className={`flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-300 group ${
                      isActive
                        ? "bg-linear-to-r from-[#a855f7] to-[#ec4899] text-white shadow-lg shadow-purple-500/25 scale-[1.02]"
                        : "hover:bg-gray-800/50 hover:text-white text-gray-500"
                    }`}
                  >
                    <item.icon
                      className={`w-6 h-6 transition-colors ${
                        isActive ? "text-white" : "text-gray-500 group-hover:text-purple-400"
                      }`}
                    />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* BOTTOM PLAN CARD */}
        <div className="mt-auto mb-5 bg-gray-900/80 p-6 rounded-4xl border border-gray-800/50 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500">
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/20 transition-all duration-500"></div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-2 w-2 bg-green-400 rounded-full shadow-sm shadow-green-400/50"></span>
            <span className="text-[0.65rem] font-bold tracking-[0.15em] text-gray-500 uppercase">
              Current Plan
            </span>
          </div>
          <div className="flex justify-between items-end mb-5">
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-1 leading-tight">
                Advanced
              </h3>
              <p className="text-sm font-medium text-gray-500">
                10,000 requests
              </p>
            </div>
            <button className="h-11 w-11 bg-gray-800/80 rounded-2xl flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-110 transition-all active:scale-95 duration-300">
              <PlusIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden p-0.5">
            <div className="h-full w-[65%] bg-linear-to-r from-purple-600 to-pink-500 rounded-full shadow-sm shadow-purple-500/50"></div>
          </div>
        </div>
      </aside>
    </>
  );
}