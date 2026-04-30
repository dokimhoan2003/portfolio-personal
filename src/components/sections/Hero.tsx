import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="max-w-container-width mx-auto py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
      <div className="flex-1 space-y-8 text-center lg:text-left">
        <h1 className="font-hero-title text-hero-title text-on-background">
          Hi all, I&apos;m Hoan{" "}
          <span className="inline-block animate-bounce text-6xl">👋</span>
        </h1>
        <p className="text-subtitle-text text-body-md max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          A passionate Full Stack Software Developer 🚀 having an experience of
          building Web and Mobile applications with JavaScript / Reactjs / Nodejs
          / React Native and some other cool libraries and frameworks.
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <a
            className="w-10 h-10 flex items-center justify-center bg-social-github text-white rounded-full hover:-translate-y-1 transition-transform"
            href="#"
          >
            <span className="material-symbols-outlined">terminal</span>
          </a>
          <a
            className="w-10 h-10 flex items-center justify-center bg-social-linkedin text-white rounded-full hover:-translate-y-1 transition-transform"
            href="#"
          >
            <span className="material-symbols-outlined">work</span>
          </a>
          <a
            className="w-10 h-10 flex items-center justify-center bg-secondary text-white rounded-full hover:-translate-y-1 transition-transform"
            href="#"
          >
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
          <button className="bg-primary-container text-on-primary px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-button-hover transition-all shadow-xl shadow-primary-container/30">
            CONTACT ME
          </button>
          <button className="bg-white border-2 border-primary-container text-primary-container px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-primary-container hover:text-on-primary transition-all shadow-lg">
            SEE MY RESUME
          </button>
        </div>
      </div>
      <div className="flex-1 w-full max-w-xl">
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary-container/10 rounded-full blur-3xl group-hover:bg-primary-container/20 transition-all"></div>
          <div className="relative rounded-2xl w-full h-[500px] overflow-hidden shadow-2xl">
            <Image
              src="/img/unnamed1.png"
              alt="Hoan Coding"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
