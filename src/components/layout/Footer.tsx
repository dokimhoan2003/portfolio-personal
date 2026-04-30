import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20 bg-surface-container-low border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-width mx-auto gap-6">
        <div className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant">
          © 2026 DO KIM HOAN • SOFTWARE ENGINEER
        </div>
        <div className="flex items-center gap-8 ">
          <a
            className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant hover:text-primary transition-all hover:-translate-y-1"
            href="#"
          >
            Github
          </a>
          <a
            className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant hover:text-primary transition-all hover:-translate-y-1"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="text-xs uppercase tracking-widest font-semibold text-on-surface-variant hover:text-primary transition-all hover:-translate-y-1"
            href="#"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};
