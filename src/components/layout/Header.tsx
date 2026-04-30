"use client";

import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-surface-container-low shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)]">
      <nav className="flex justify-between items-center max-w-container-width mx-auto py-4 px-6">
        <div className="text-xl font-extrabold tracking-tighter text-primary flex items-center">
          <i className="italic">&lt;Do Kim Hoan /&gt;</i>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-tight">
          <Link
            href="#skills"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#blog"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
        <button className="bg-primary-container text-on-primary px-6 py-2 rounded-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary-container/20 flex items-center gap-2">
          <span className="material-symbols-outlined text-lg leading-none">
            download
          </span>
          Resume
        </button>
      </nav>
    </header>
  );
};
