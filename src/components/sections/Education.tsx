import React from "react";
import Image from "next/image";

const educationData = [
  {
    id: 1,
    degree: "M.S. in Computer Science",
    school: "Stanford University",
    date: "Graduated 2018",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1MZRxWM1B_L7ERnsJR8f6hEaYGAcqKeCibEgJ7oxk5GWRaENhUgtf5Llm2tq9edmJUQgkqLlFnqj_G8SwiM9uwa8HFTRQSo2ieKUSXSA5mKXBQKpK9PwbN-5cRjhSqu8Um7d1d1je05AoV97B8X9r3Keyk85rDiRMypMZtIXyV4ri0SByGnpl4D282JeCg_cNEonA1JV_SZAu7KjbKPeAPmG-keJtl1ihf8Up05txAGrnHDhitEv0r70Z5e9tUORqnZKmIPiE",
    bullets: [
      "Specialized in Artificial Intelligence and Human-Computer Interaction.",
      'Published research paper on "Predictive UI Patterns in Distributed Systems".',
      "GPA: 3.9/4.0, recipient of the Innovation in Tech Scholarship.",
    ],
  },
  {
    id: 2,
    degree: "B.S. in Software Engineering",
    school: "Massachusetts Institute of Technology",
    date: "Graduated 2016",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjJx0EanXXcuXQziLSUgupaMWu3abhK1_GNpInC3nTN_eoZfgzmqxo2zjXkUz_IR_Zt25hXgjfut2AaNe_vT8Z2YJZuw9WUvlW_GAP_cQ4nRGd7Xw2bwqekINyw4JZ6qXPH1OcqjsD2MrkMlDmd6EU3nYD2O1det6asglnZ8OluRCTSAM9T9R1uBab-9G2Bv72MwMfvvtwlOOMCvX0PAOMzVU8RZviYpogEUJ0pKXy3iYhUeqiqtddl76YiNe04y-PqqmvE1G8",
    bullets: [
      "Core focus on Data Structures, Algorithms, and Operating Systems.",
      "Lead developer for the university's open-source robotics framework.",
      "Dean's List for 6 consecutive semesters.",
    ],
  },
];

export const Education = () => {
  return (
    <section className="mb-20" id="education">
      <div className="flex items-center gap-4 mb-12">
        <span
          className="material-symbols-outlined text-4xl text-secondary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          school
        </span>
        <h2 className="font-section-heading text-card-title-lg md:text-section-heading text-on-surface">
          Academic Foundation
        </h2>
      </div>
      <div className="space-y-8">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="group relative bg-white p-8 rounded-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row gap-8 items-start overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 h-1 bg-secondary w-0 transition-all duration-500 ease-out group-hover:w-full"></div>
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 rounded-lg bg-surface-container flex items-center justify-center p-4">
                <Image
                  src="/img/unnamed1.png"
                  alt={edu.school}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="font-card-title-lg text-2xl text-on-surface">
                    {edu.degree}
                  </h3>
                  <p className="text-secondary font-semibold">{edu.school}</p>
                </div>
                <span className="font-label-caps text-subtitle-text mt-2 md:mt-0">
                  {edu.date}
                </span>
              </div>
              <ul className="space-y-2 text-card-description list-none">
                {edu.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm mt-1">
                      arrow_forward
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
