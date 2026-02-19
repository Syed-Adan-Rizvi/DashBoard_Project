"use client"; // Kyunki hum useRouter (hook) use kar rahe hain

import Link from "next/link";
import { useRouter } from "next/navigation";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  const router = useRouter();

  return (
    // Poore screen ko dark aur center karne ke liye classes
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center font-sans">
      
      {/* 404 Number with Glow Effect */}
      <div className="relative">
        <div className="absolute inset-0 bg-purple-600 blur-[100px] opacity-30 rounded-full"></div>
        <h1 className="text-9xl md:text-[150px] font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500 relative z-10 leading-none tracking-tighter">
          404
        </h1>
      </div>

      {/* Heading & Description */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-8 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg">
        It looks like you've reached a place that doesn't exist. Either the link is broken, or the URL is incorrect.
      </p>

      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        
        {/* BUTTON 1: Go Back */}
        <button
          onClick={() => router.back()} // Pichle page par wapis bhej dega
          className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl border-2 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-all font-bold group"
        >
          <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Go Back
        </button>

        {/* BUTTON 2: Go to Home */}
        <Link
          href="/" // Dashboard (home) par le jayega
          className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-linear-to-r from-purple-600 to-pink-500 text-white hover:shadow-xl hover:shadow-purple-500/30 transition-all font-bold hover:scale-[1.02]"
        >
          <HomeIcon className="w-5 h-5" />
          Go to Home
        </Link>
        
      </div>
      
    </div>
  );
}