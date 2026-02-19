import { MagnifyingGlassIcon, BellIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function SettingsHeader() {
  return (
    // Sticky Header Logic
    // z-20: Taki baaki content ke upar rahe
    // backdrop-blur-md: Glassy effect ke liye
    // bg-[#1a1a1a]/90: Dark background jo thoda transparent hai
    <div className="sticky top-0 z-20 flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-4 bg-[#2d3748]/80 backdrop-blur-lg border-b border-white/10 transition-all">
      
      {/* LEFT: TITLE & BREADCRUMB */}
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        {/* <button className="md:hidden text-gray-400 hover:text-white">
            <Bars3Icon className="w-6 h-6" />
        </button> */}
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Settings</h1>
          <p className="text-sm text-gray-400">Manage your account settings and preferences</p>
        </div>
      </div>

      {/* RIGHT: SEARCH & PROFILE */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        
        {/* Search Bar */}
        <div className="relative flex-1 md:w-64">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search analytics..." 
            className="w-full bg-[#1a202c] text-white text-sm pl-9 pr-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-500"
          />
        </div>

        {/* Notification Bell */}
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <BellIcon className="w-6 h-6" />
          {/* Red Dot */}
          <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full border-2 border-[#2d3748]"></span>
        </button>

        {/* Vertical Divider */}
        <div className="h-8 w-px bg-gray-700 mx-1 hidden md:block"></div>

        {/* User Profile (Compact) */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-white/5 p-1.5 rounded-lg transition-colors">
          <div className="w-9 h-9 rounded-full bg-linear-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
            AR
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-bold text-white leading-none">Adan Rizvi</p>
            <p className="text-xs text-gray-400 mt-0.5">Admin</p>
          </div>
        </div>

      </div>
    </div>
  );
}