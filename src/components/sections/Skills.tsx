import React from "react";
import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
}

const backendSkills: Skill[] = [
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "JWT", icon: "https://jwt.io/img/pic_logo.svg" },
  { name: "Java Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
];

const frontendSkills: Skill[] = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
];

const cloudSkills: Skill[] = [
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  // { name: "IAM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
];

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-surface-container-high min-w-[200px] flex-shrink-0 hover:shadow-lg transition-shadow duration-300">
    <div className="relative w-8 h-8 flex-shrink-0">
      <Image
        src={skill.icon}
        alt={skill.name}
        fill
        className="object-contain"
      />
    </div>
    <span className="font-bold text-on-surface text-lg tracking-tight whitespace-nowrap">
      {skill.name}
    </span>
  </div>
);

const SkillRow = ({
  title,
  skills,
  reverse = false,
}: {
  title: string;
  skills: Skill[];
  reverse?: boolean;
}) => {
  // Triple the skills to ensure smooth infinite scroll
  const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="space-y-6 w-full overflow-hidden">
      <div className="flex items-center gap-4 px-4">
        <div className="h-px flex-grow bg-outline-variant"></div>
        <h3 className="text-primary font-bold text-xs uppercase tracking-[0.2em] whitespace-nowrap">
          {title}
        </h3>
        <div className="h-px flex-grow bg-outline-variant"></div>
      </div>
      <div className="relative flex">
        <div
          className={`flex gap-6 py-4 ${reverse ? "animate-scroll-reverse" : "animate-scroll"
            }`}
          style={{ "--animation-duration": "30s" } as React.CSSProperties}
        >
          {repeatedSkills.map((skill, idx) => (
            <SkillCard key={`${skill.name}-${idx}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section className="py-24 bg-surface" id="skills">
      <div className="max-w-container-width mx-auto text-center mb-16 space-y-4">
        <h2 className="font-hero-title text-5xl md:text-6xl text-primary tracking-tight">
          Technical Proficiency
        </h2>
        <p className="text-subtitle-text text-lg max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my tech stack, categorized by domain
          expertise and maintained at professional production standards.
        </p>
      </div>

      <div className="space-y-16">
        <SkillRow title="Backend Systems" skills={backendSkills} />
        <SkillRow title="Cloud & Infra-Architecture" skills={cloudSkills} reverse={true} />
        <SkillRow title="Frontend Experiences" skills={frontendSkills} />
      </div>
    </section>
  );
};
