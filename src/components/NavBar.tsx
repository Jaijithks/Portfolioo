"use client"

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-gradient-to-b from-black/30 via-black/20 to-black/10 border-b border-white/6 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

        <a
          href="#"
          aria-label="Home"
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/20 text-base sm:text-lg font-extrabold bg-gradient-to-br from-amber-400/12 via-white/3 to-transparent shadow-[0_6px_18px_-6px_rgba(0,0,0,0.6)] hover:scale-105  hover:bg-blue-500 transition-transform"
        >
          JK
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-3 text-sm items-center">
          <a href="#about" className="inline-flex items-center px-3 py-2 rounded-full bg-white/6 border border-white/8 hover:bg-white/12 transition">About</a>
          <a href="#skills" className="inline-flex items-center px-3 py-2 rounded-full bg-white/6 border border-white/8 hover:bg-white/12 transition">Skills</a>
          <a href="#projects" className="inline-flex items-center px-3 py-2 rounded-full bg-white/6 border border-white/8 hover:bg-white/12 transition">Projects</a>
          <a href="#contact" className="inline-flex items-center px-3 py-2 rounded-full bg-white/6 border border-white/8 hover:bg-white/12 transition">Contact</a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md bg-white/6 hover:bg-white/12 transition"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/6 shadow-lg">
          <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#about" className="px-4 py-3 rounded-lg bg-white/6 hover:bg-white/12 transition">About</a>
            <a onClick={() => setOpen(false)} href="#skills" className="px-4 py-3 rounded-lg bg-white/6 hover:bg-white/12 transition">Skills</a>
            <a onClick={() => setOpen(false)} href="#projects" className="px-4 py-3 rounded-lg bg-white/6 hover:bg-white/12 transition">Projects</a>
            <a onClick={() => setOpen(false)} href="#contact" className="px-4 py-3 rounded-lg bg-white/6 hover:bg-white/12 transition">Contact</a>
          </div>
        </div>
      )}

    </nav>
  );
}