export default function Footer() {
  return (
    // {/* FOOTER SECTION START */}
    // {/* //    - w-full: Poori width lega
    //    - border-t: Upar ek halki border taaki content se alag dikhe
    //    - bg-[#13131a]: Sidebar wala same dark background
    // */}
    <footer className="w-full py-6 bg-[#13131a] border-t border-gray-800/50">
      
      {/* Container for centering content */}
      <div className="container mx-auto px-4 flex justify-center items-center">
        
        {/* COPYRIGHT TEXT START */}
        <p className="text-sm text-gray-500 font-medium tracking-wide">
          &copy; 2025{' '}
          
          {/* Brand Name with Hover Effect */}
          {/* Hover hone par color purple/pink hoga aur thoda bright dikhega */}
          <span className="cursor-pointer transition-colors duration-300 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-purple-400 hover:to-pink-400">
            LookCheck
          </span>
          
          . All rights reserved.
        </p>
        {/* COPYRIGHT TEXT END */}
        
      </div>
    </footer>
    // {/* FOOTER SECTION END */}
  );
}