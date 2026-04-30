import React from "react";

export const Contact = () => {
  return (
    <section
      className="py-20 border-t border-surface-container-highest"
      id="contact"
    >
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2">
          <h2 className="font-contact-title text-contact-title text-primary mb-8">
            Contact Me
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-subtitle-text font-label-caps uppercase">
                  Email
                </p>
                <p className="font-card-title-lg text-on-surface">
                  kimhoando@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="text-subtitle-text font-label-caps uppercase">
                  Phone
                </p>
                <p className="font-card-title-lg text-on-surface">
                  +84 98 227 6139
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="text-subtitle-text font-label-caps uppercase">
                  Location
                </p>
                <p className="font-card-title-lg text-on-surface">
                  Ha Noi
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex gap-4">
            <a
              className="w-12 h-12 rounded-full bg-social-github flex items-center justify-center text-white transition-all hover:scale-110 hover:-translate-y-1 shadow-lg"
              href="#"
              title="Github"
            >
              <span className="material-symbols-outlined">terminal</span>
            </a>
            <a
              className="w-12 h-12 rounded-full bg-social-linkedin flex items-center justify-center text-white transition-all hover:scale-110 hover:-translate-y-1 shadow-lg"
              href="#"
              title="LinkedIn"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              className="w-12 h-12 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white transition-all hover:scale-110 hover:-translate-y-1 shadow-lg"
              href="#"
              title="Twitter"
            >
              <span className="material-symbols-outlined">chat_bubble</span>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <form className="bg-white p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-surface-container-high space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">
                  Name
                </label>
                <input
                  className="w-full bg-surface-container-lowest border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Kim Hoan"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">
                  Email
                </label>
                <input
                  className="w-full bg-surface-container-lowest border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="hoan@example.com"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">
                Message
              </label>
              <textarea
                className="w-full bg-surface-container-lowest border-outline-variant rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tell me about your project..."
                rows={4}
              ></textarea>
            </div>
            <button
              className="w-full bg-primary text-on-primary py-4 rounded-lg font-button-text text-button-text uppercase tracking-widest hover:bg-button-hover transition-all active:scale-95 shadow-xl"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
