import React from "react";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    category: "ARCHITECTURE",
    title: "The Future of React Server Components",
    desc: "Deep dive into the paradigm shift of rendering logic and how it affects core web vitals.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFW9EoHXhAEQGm7zcrNDpGMHwN027lOQ4qtxpMpraxQA4ZieiHIMex9106Kw5Fu-6F9sewbbOh_wXHlDrgfegAomHpgxe0jU9wvHCoJRGByh78egt3LHGklXEwyq0Ty7hTRo7nb6zAIQU9QMG06s4i4Qg8fMNjkxFCEYwm8XJOEsBPiABZLzBaRs0svcE8a33DeuKv6pv1BfNM2HTGTz6ya7lT-PO9Mf7I1tab65e46r8JchXytw23yprLhp2vRR_upUGTTmVE",
  },
  {
    id: 2,
    category: "DESIGN SYSTEM",
    title: "Scaling Tailwind for Enterprise Apps",
    desc: "Best practices for maintaining consistency across a fleet of internal dashboard products.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUFydPsh0R39yYLJNOkifjFdBRWg3HC18jm_6RoyhWF73AxezahEGyxdJ3xbd6VgJ1J-14tHYq5z8XZfgIGJa-CZJYpk2qcAAqsrVlZlN8ltgtRCQoCazqXTi3G7cU1-euyFpOcBxWIRAs1V96dM6W5zHG4OdmUsyn8jPXSGHyVqotASB8nnUsbI6CeA3Qs_py2wOx29_ZCuI41cKsbsjvA2uGZRUqcvT3bDzC4ezSf8rlQc0MnjPrbqwyeDd1Vevy5eBlsgcm",
  },
];

export const Blogs = () => {
  return (
    <section id="blogs">
      <div className="flex flex-col md:flex-row gap-12 items-start mb-12">
        <div className="md:w-1/3">
          <h2 className="font-section-heading text-section-heading text-primary mb-4">
            Latest Insights
          </h2>
          <p className="text-subtitle-text text-body-md max-w-sm">
            Exploring the intersection of modern architecture, clean code, and
            user experience design.
          </p>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="relative group overflow-hidden bg-white rounded-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary rounded-full transition-transform duration-700 ease-in-out -z-0 opacity-5 group-hover:scale-[25]"></div>
              <div className="relative z-10">
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src="/img/unnamed1.png"
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="font-label-caps text-label-caps text-secondary mb-2 block uppercase">
                    {blog.category}
                  </span>
                  <h3 className="font-card-title-lg text-card-title-lg text-blog-title mb-3 group-hover:text-white transition-colors duration-500">
                    {blog.title}
                  </h3>
                  <p className="text-card-description text-body-md group-hover:text-white/80 transition-colors duration-500">
                    {blog.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary group-hover:text-white transition-colors duration-500 font-bold">
                    Read Post{" "}
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
