export default function Loading() {
  return (
    // Flex container taaki loader hamesha center mein rahe
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] gap-5">
      
      {/* GLOWING SPINNER ANIMATION */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Outer Ring (Spinning) */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-100 border-t-purple-600 animate-spin"></div>
        
        {/* Inner Ring (Reverse Spinning & Pink) */}
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-pink-500 animate-[spin_1.5s_reverse_infinite] shadow-lg shadow-purple-500/30"></div>
        
        {/* Center Dot */}
        <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <p className="text-lg font-bold text-gray-800 tracking-wide animate-pulse">
          Loading...
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Please wait while we fetch your data
        </p>
      </div>

    </div>
  );
}