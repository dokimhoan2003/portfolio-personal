import React from "react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "Google • Mountain View, CA",
    date: "2022 - Present",
    desc: "Leading the development of scalable UI components for Cloud Console, focusing on performance optimization and accessibility standards.",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuADlNlJ5F3LOLjQYERGJt4Z_V5vfI0tKG0XaDY-oOJXIC-R02j14OrOUCMtPikP0uHWdBr1AeBUcAzkHsiWf_3QICKuuBLh87JX4nxBND6McgDXK31qMH_BxZoM_6fwMqqBmKNXy3KuQPhaLGGSUNMnUlKGwHn93G0Q5SSxuYQ1WVRAlMrlY7Trc0bU9CPEsD9WjsPkRd-hgaZ70vFOVq7sDtwt-0lQRcKa-dw5EUpbHOlhXepPJOcyhC6MYxNDQBV3x_ltdGfw",
    gradient: "from-primary to-secondary",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Meta • Menlo Park, CA",
    date: "2020 - 2022",
    desc: "Engineered real-time data visualization tools for internal metrics, utilizing React, GraphQL, and specialized Node.js microservices.",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzeBW9un05OL3vfnn4nTxEFreTJ0FglSjBO5n2EBzFt9iznuJGfH0vNfzoSMVduKxTU6ux9eOwKPcNNBzgUeNIcJfophTgKeeZMlTcbxG5YeNC6uHPsI-I34ARY47anK_KoE_Pb3TYa0-dI-a0WZWefs5cFlWN_LU3YoxMuDAFj3sR7lmro8O1y1QLRzEOXku5ikm1HcaMo4g8JS3vBFTH2hpO_DPH-LAa4Bwm5q3t4A7RNhGJhTWKKFI-ipyVVueACj0gG0QD",
    gradient: "from-secondary to-on-primary-container",
  },
  {
    id: 3,
    role: "UI/UX Engineer",
    company: "Stripe • San Francisco, CA",
    date: "2018 - 2020",
    desc: "Crafted high-fidelity interactive prototypes and design systems that bridged the gap between product design and engineering implementation.",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIkPtqKjDlMZd1SAjNcpdSqAzI7azebpwdogyOQSTZKA1mRSRtndN4hWB0pwI_iAYy8PSSTJ12Llw-4Y2DyC2nk-J2tVdA4CXKTFzgRRLZne2xS-NtNf18mVkPtRIuM4UH6zFLLvZmG333LfB27czvtHLz0GWAB1BmsGMjLK0H0wTkvhc6WIvRFV62S_J6Mt6J_e9wS1wKsnWZCSrmJWJojdvxODwJMvEClrlxSr-7cPKAB2MtM82Uvtm_eC6ps4dt274X8k-o",
    gradient: "from-on-primary-container to-primary",
  },
];

export const Experience = () => {
  return (
    <section className="mb-32" id="experience">
      <div className="flex items-center gap-4 mb-12">
        <span
          className="material-symbols-outlined text-4xl text-secondary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          work
        </span>
        <h2 className="font-section-heading text-card-title-lg md:text-section-heading text-on-surface">
          Professional Path
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-all duration-300"
          >
            <div
              className={`h-32 w-full relative transition-all duration-500 bg-gradient-to-br ${exp.gradient} group-hover:saturate-120 group-hover:brightness-110`}
            >
              <div className="absolute -bottom-6 left-6 w-16 h-16 bg-white rounded-full p-2 shadow-lg z-10">
                <Image
                  src="/img/unnamed1.png"
                  alt={exp.company}
                  fill
                  className="object-contain p-2 rounded-full"
                />
              </div>
            </div>
            <div className="pt-10 px-6 pb-8">
              <span className="font-label-caps text-label-caps text-secondary uppercase mb-2 block">
                {exp.date}
              </span>
              <h3 className="font-card-title-lg text-card-title-lg text-on-surface mb-1">
                {exp.role}
              </h3>
              <p className="text-subtitle-text font-medium mb-4">{exp.company}</p>
              <p className="text-card-description font-body-md text-sm leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
