import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Lumina Analytics Suite",
    tags: ["React", "Node.js"],
    desc: "A full-stack enterprise platform processing over 1M data points daily. Implemented real-time streaming using WebSockets and custom-built D3.js visualization components.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUqKr8pQykYBX0GuxpbVAQT-AfWGfxVRff1sh21Dn2teyKSqkIEbXvl1Fd0dIFWpShqwILlb8u3C8dyNrVSnSTZQTEwVKEFiz8U406QtxhTUBeDg7CWBwJmnU8RMOABPyJmJjJvY7myFYh6ib7s_JmW3zLcN0fayYozjoPYY_YmSfwTfIhwW5wzRzuUZfdgp8QexpV3y4RgE3kfz4jciaeggSwVAiI1HGD_2zFeMbrsbQParXRsp8heb9eSQZuWPUpRqGVvFDg",
    links: [
      { name: "View Case Study", icon: "link" },
      { name: "Source", icon: "code" },
    ],
    reverse: false,
  },
  {
    id: 2,
    title: "Nexus Pay App",
    tags: ["SwiftUI", "Firebase"],
    desc: "Redefined mobile banking with a focus on intuitive micro-interactions and biometric security. Achieved a 4.9 rating on the App Store with 50k+ active users.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPc2sMtlmGfpg6GxcmJgcJy0d_zGMQzLhWqcJXqKO6NpvskkoYEyBD4eN_EqLlzAzd2nOnxg5BmDp-R482FfJhbEc9xhcc1FTHgcMwG895JZjIeopEUEDfqALKNj8jpVu68WIgkh3BbyM4NR3lfEJixdT38o4dFgujbKdrwowwMHHEUGatfbfPRLUef2RIwkIUOBrhiApWoLh1ETyM7IY4x8A9LWsoYOl-JGr5J1EOnRADl7VYU2eG5BjvsrRN6R0cx7kbAXMe",
    links: [{ name: "App Store", icon: "link" }],
    reverse: true,
  },
];

export const Projects = () => {
  return (
    <section className="space-y-16 mb-24" id="projects">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-section-heading text-section-heading text-on-surface">
          Big Projects
        </h2>
        <div className="h-px flex-grow bg-outline-variant"></div>
      </div>

      {projects.map((project) => (
        <div
          key={project.id}
          className={`flex flex-col ${project.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-outline-variant transition-transform hover:-translate-y-2 duration-300`}
        >
          <div className="lg:w-3/5 h-[400px] overflow-hidden relative">
            <Image
              src="/img/unnamed1.png"
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:w-2/5 p-12 flex flex-col justify-center">
            <div className="flex gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-surface-container-highest text-primary font-label-caps text-label-caps rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-card-title-lg text-card-title-lg text-primary mb-4">
              {project.title}
            </h3>
            <p className="font-body-md text-card-description mb-8">
              {project.desc}
            </p>
            <div className="flex gap-4">
              {project.links.map((link, idx) => (
                <button
                  key={idx}
                  className="flex items-center gap-2 font-button-text text-button-text text-primary hover:text-button-hover transition-colors"
                >
                  <span className="material-symbols-outlined">{link.icon}</span>{" "}
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
