import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Blogs } from "@/components/sections/Blogs";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-container-width mx-auto py-12">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
