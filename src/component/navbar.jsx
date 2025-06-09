"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
    initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2,delay : 0.3, ease: 'easeOut' }}
    className="w-full fixed  z-50 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div>
          <img
            src="/WhatsApp Image 2025-06-03 at 12.40.23 PM-Photoroom.png"
            alt="Logo"
            className="w-auto h-14 md:h-14 object-contain px-4 "
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden font-medium md:flex space-x-8 pt-2 pe-20">
          <li>
            <Link href="#Home" className="hover:text-[#c26265]">
              Home
            </Link>
          </li>
          <li>
            <Link href="#Plans" className="hover:text-[#c26265]">
              Project plans
            </Link>
          </li>

          <li>
            <Link href="#about" className="hover:text-[#c26265] ">
              About us
            </Link>
          </li>

          <li>
            <Link href="#Gallerysection" className="hover:text-[#c26265]">
              Gallery
            </Link>
          </li>

          <li>
            <Link href="#Contactsection" className="hover:text-[#c26265]">
              Booking
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Items */}
      {mobileMenuOpen && (
        <div className="md:hidden text-center bg-white px-6 py-4 space-y-3 shadow-md">
          <Link href="#Home" onClick={() => setMobileMenuOpen(false)} className="block text-black">
            Home
          </Link>
          <hr />
          <Link href="#Plans" onClick={() => setMobileMenuOpen(false)} className="block text-black">
            Project plans
          </Link>
          <hr />
          <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-black">
            About us
          </Link>
          <hr />
          <Link href="#Gallerysection" onClick={() => setMobileMenuOpen(false)} className="block text-black">
            Gallery
          </Link>
          <hr />
          <Link href="#Contactsection" onClick={() => setMobileMenuOpen(false)} className="block text-black">
            Booking
          </Link>
          
        </div>
      )}
    </motion.nav>
  );
}
