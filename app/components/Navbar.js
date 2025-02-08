// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Cookies from 'js-cookie';

// const Navbar = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

//   useEffect(() => {
//     const authStatus = Cookies.get('isAuthenticated') === 'true';
//     setIsAuthenticated(authStatus);
//   }, []);

//   const handleSignOut = () => {
//     Cookies.remove('isAuthenticated');
//     Cookies.remove('userEmail');
//     setIsAuthenticated(false);
//   };

//   return (
//     <div className="top-0 left-0 w-full z-50 bg-transparent">
//       {/* Desktop Navbar */}
//       <div className="hidden sm:flex justify-center w-full">
//         <div className="w-full px-4">
//           <div className="flex items-center justify-between py-8 gap-28">
//             {/* Left links */}
//             <div className="left-nav bg-[#64748b45] bg-opacity-80 text-white rounded-lg p-3 flex items-center justify-start space-x-8 shadow-lg w-full sm:w-1/2">
//               <Link
//                 href="/"
//                 className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-1500"
//               >
//                 HOME
//               </Link>
//               <Link
//                 href="/about"
//                 className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-1500"
//               >
//                 ABOUT
//               </Link>
//               <Link
//                 href="/events"
//                 className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-1500"
//               >
//                 EVENTS
//               </Link>
//               <Link
//                 href="https://teams-page-msc.vercel.app/"
//                 className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-1500"
//               >
//                 TEAM
//               </Link>
//             </div>

//             {/* Right links */}
//             <div className="right-nav bg-[#64748b45] text-white rounded-lg p-3 flex items-center justify-end space-x-8 shadow-lg w-full sm:w-1/2">
//               {!isAuthenticated ? (
//                 <>
//                   <Link
//                     href="/login"
//                     className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
//                   >
//                     LOGIN
//                   </Link>
//                   <Link
//                     href="/signup"
//                     className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
//                   >
//                     SIGN UP
//                   </Link>
//                 </>
//               ) : (
//                 <button
//                   onClick={handleSignOut}
//                   className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
//                 >
//                   SIGN OUT
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navbar */}
//       <div className="sm:hidden flex items-center justify-between h-20 px-4 py-3 bg-[#64748b45] relative">
//         {/* Logo */}
//         <div className="flex items-center">
//           {/* <img
//             src="/msc_logo.png"
//             alt="MSC Logo"
//             width={50}
//             height={50}
//             className="rounded-full"
//           /> */}
//         </div>

//         {/* Hamburger menu */}
//         <button
//           className="flex flex-col justify-center items-center space-y-1 focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <div className="w-6 h-0.5 bg-white"></div>
//           <div className="w-6 h-0.5 bg-white"></div>
//           <div className="w-6 h-0.5 bg-white"></div>
//         </button>

//         {/* Dropdown menu for mobile */}
//         {isMenuOpen && (
//           <div
//           className="absolute top-full left-0 right-0 bg-[#64748b80] backdrop-blur-md bg-opacity-80 text-white rounded-lg shadow-lg mt-2 p-4 flex flex-col space-y-4 z-50"

//           >
//             <Link
//               href="/"
//               className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               HOME
//             </Link>
//             <Link
//               href="/about"
//               className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               ABOUT
//             </Link>
//             <Link
//               href="/events"
//               className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               EVENTS
//             </Link>
//             <Link
//               href="https://teams-page-msc.vercel.app/"
//               className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               TEAM
//             </Link>
//             {!isAuthenticated ? (
//               <>
//                 <Link
//                   href="/login"
//                   className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   LOGIN
//                 </Link>
//                 <Link
//                   href="/signup"
//                   className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   SIGN UP
//                 </Link>
//               </>
//             ) : (
//               <button
//                 onClick={() => {
//                   handleSignOut();
//                   setIsMenuOpen(false);
//                 }}
//                 className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
//               >
//                 SIGN OUT
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { gsap } from "gsap"; // Import GSAP

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu
  const dropdownRef = React.useRef(null); // Reference for dropdown menu

  useEffect(() => {
    const authStatus = Cookies.get("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  const handleSignOut = () => {
    Cookies.remove("isAuthenticated");
    Cookies.remove("userEmail");
    setIsAuthenticated(false);
  };

  // Function to toggle the menu animation
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // GSAP animation for dropdown menu
    if (!isMenuOpen) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, scaleY: 0, transformOrigin: "top" }, // Initial state
        { opacity: 1, scaleY: 1, duration: 0.5, ease: "power3.out" } // Animation
      );
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        scaleY: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  };

  return (
    <div className="top-0 left-0 w-full z-50 bg-transparent">
      {/* Desktop Navbar */}
      <div className="hidden sm:flex justify-center w-full">
        <div className="w-full px-4">
          <div className="flex items-center justify-between py-8 gap-28">
            {/* Left links */}
            <div className="left-nav bg-[#64748b45] bg-opacity-80 text-white rounded-lg p-3 flex items-center justify-start space-x-8 shadow-lg w-full sm:w-1/2">
              <Link
                href="/"
                className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-1500"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-1500"
              >
                ABOUT
              </Link>
              <Link
                href="/events"
                className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-1500"
              >
                EVENTS
              </Link>
              <Link
                href="https://teams-page-msc.vercel.app/"
                className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-1500"
              >
                TEAM
              </Link>
            </div>

            {/* Right links */}
            <div className="right-nav bg-[#64748b45] text-white rounded-lg p-3 flex items-center justify-end space-x-8 shadow-lg w-full sm:w-1/2">
              {!isAuthenticated ? (
                <>
                  <Link
                    href="/login"
                    className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
                  >
                    LOGIN
                  </Link>
                  <Link
                    href="/signup"
                    className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
                  >
                    SIGN UP
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleSignOut}
                  className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
                >
                  SIGN OUT
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden flex items-center justify-between h-20 px-4 py-3 bg-[#64748b45] relative">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img
            src="/msc_logo.png"
            alt="MSC Logo"
            width={50}
            height={50}
            className="rounded-full"
          /> */}
        </div>

        {/* Hamburger menu */}
        <button
          className="flex flex-col justify-center items-center space-y-1 focus:outline-none"
          onClick={toggleMenu} // Trigger GSAP animation and menu toggle
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {/* Dropdown menu for mobile */}
        <div
          ref={dropdownRef} // Attach GSAP reference to the dropdown
          className="absolute top-full left-0 right-0 bg-[#64748b80] backdrop-blur-md bg-opacity-80 text-white rounded-lg shadow-lg mt-2 p-4 flex flex-col space-y-4 z-50"
          style={{
            display: isMenuOpen ? "flex" : "none", // Ensure it only shows when isMenuOpen is true
            flexDirection: "column", // Ensure links are stacked vertically
          }}
        >
          <Link
            href="/"
            className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="/events"
            className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
            onClick={() => setIsMenuOpen(false)}
          >
            EVENTS
          </Link>
          <Link
            href="https://teams-page-msc.vercel.app/"
            className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
            onClick={() => setIsMenuOpen(false)}
          >
            TEAM
          </Link>
          {!isAuthenticated ? (
            <>
              <Link
                href="/login"
                className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
                onClick={() => setIsMenuOpen(false)}
              >
                LOGIN
              </Link>
              <Link
                href="/signup"
                className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
                onClick={() => setIsMenuOpen(false)}
              >
                SIGN UP
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleSignOut();
                setIsMenuOpen(false);
              }}
              className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
            >
              SIGN OUT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;







