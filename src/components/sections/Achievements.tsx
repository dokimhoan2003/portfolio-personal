import React from "react";
import Image from "next/image";

const achievements = [
  {
    id: 1,
    title: "AWS Solutions Architect",
    desc: "Expertise in designing resilient, high-performance, and secure cloud infrastructures at scale.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGomDWWsT4mvh6BJYRci5UQQt-xGc_8Apqfsu8cuvBxmjVDKuy5cSduyog4bsIFvPqd0ikD-Ekjf9YHf4CxL0swL7KW5sxi5PEEH7cgQ4p79afYXmF7MAwFdsRuiQIrjEIuWg9ioE5PL88Gvoz5K1rjRrMeaGMwzR8PrfCr5ZxkKbg9kML2heKSEoH138dOSGp4pX3iGs-VqnNlxQRxCzvi6Vc5jKCHyGwgmMxbGGQdRqTo6t44vyMxucrjTmUe6AzRG6CRHVk",
    credential: "Credential ID: 982-AX",
    icon: "verified",
  },
  {
    id: 2,
    title: "Hackathon Winner 2023",
    desc: "Awarded 1st place among 200+ teams for developing an AI-driven accessibility tool for vision impairment.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAlfd6ocAug9r_4eYhGfXqDwGQy-1vxhZzLB4UF7h49jjdvqNc7rAbiaUgr6VdOMRldSJD0vyvag4CocmPdRFFJ16tj_X02l97IZXXF-HlzbcTwDYz9BIK9ckNgibSU2Zv7AyHUqOqEf4A1eCTCz5iqP_Jgg_YZVGFlL1lIBJGQzpr2FxaIX83xLSLHVHidgWzWfqMg_pe1puxKvkWxZGyh7rredmtsbos2cNY6k6ti4xZITqa4W3k5LWK7YSk9Em5uFWDHtiR",
    credential: "Global Tech Fest",
    icon: "emoji_events",
  },
  {
    id: 3,
    title: "Google UX Professional",
    desc: "Mastery in user-centered design, prototyping, and accessibility standards for modern web applications.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVqIChacgX3q7I-QF3OSdpNxSl1d775vz6i1hNL6uA2dlbcQNRqfuzJnPWcW-Z1Q4id7hYuUeHhhWoFQZwYNdRdHQ3aMBenyutX873Bd-jlfa9X9_ENWxxtPu6k2GY6_X7qFTajjsOuRUqPIEossKtREvDUfwyCwyTCpw2A1YawJdbEidr56dLfQqNMiB7lIr2jCk28aIVRBWR6bI9IqbwLUrAtrjQH1mMBbZ1OP0ePQlFozPkSK5I0yVF9mR1psXzHTGblz46",
    credential: "Google Career Cert",
    icon: "workspace_premium",
  },
];

export const Achievements = () => {
  return (
    <section className="mb-24" id="achievements">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-section-heading text-section-heading text-on-surface">
          Achievements & Certifications
        </h2>
        <div className="h-px flex-grow bg-outline-variant"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-outline-variant"
          >
            <div className="h-48 overflow-hidden relative">
              <Image
                src="/img/unnamed1.png"
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h4 className="font-card-title-lg text-xl text-on-surface mb-2">
                {item.title}
              </h4>
              <p className="font-body-md text-card-description text-sm mb-6">
                {item.desc}
              </p>
              <div className="mt-auto">
                <div className="h-[2px] w-12 bg-primary mb-4 transition-all duration-300 group-hover:w-full"></div>
                <div className="flex justify-between items-center">
                  <span className="px-4 py-1 bg-primary-container text-white font-label-caps text-[10px] rounded uppercase tracking-widest">
                    {item.credential}
                  </span>
                  <span className="material-symbols-outlined text-primary">
                    {item.icon}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
