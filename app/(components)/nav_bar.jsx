"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Utility function to check if the link is active
  const isActive = (href) => pathname === href ? "bg-brand-blue hover:bg-brand-blue" : "hover:bg-gray-700";

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Image 
              src="/snaplood.png" 
              width={150} 
              height={25} 
              alt="Snaplood Logo" 
              className="h-6 w-auto md:h-7"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("/")}`}>
                Home
              </Link>
              <Link href="/how-to-use" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("/how-to-use")}`}>
                How to Use
              </Link>
              <Link href="/faq" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("/faq")}`}>
                FAQ
              </Link>
              <Link href="/contact-us" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive("/contact-us")}`}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/")}`}>
              Home
            </Link>
            <Link href="/how-to-use" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/how-to-use")}`}>
              How to Use
            </Link>
            <Link href="/faq" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/faq")}`}>
              FAQ
            </Link>
            <Link href="/contact-us" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/contact-us")}`}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
