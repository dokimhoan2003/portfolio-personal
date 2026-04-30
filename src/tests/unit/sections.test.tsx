import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Blogs } from "@/components/sections/Blogs";
import { Contact } from "@/components/sections/Contact";

// Mock next/image to render a simple img tag for testing
vi.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

describe("Section Components", () => {
  describe("Hero", () => {
    it("renders hero title and buttons", () => {
      render(<Hero />);
      expect(screen.getByText(/Hi all, I'm Hoan/i)).toBeInTheDocument();
      expect(screen.getByText(/CONTACT ME/i)).toBeInTheDocument();
      expect(screen.getByText(/SEE MY RESUME/i)).toBeInTheDocument();
    });
  });

  describe("Skills", () => {
    it("renders section title and skill names", () => {
      render(<Skills />);
      expect(screen.getByText(/Technical Proficiency/i)).toBeInTheDocument();
      expect(screen.getAllByText("PostgreSQL")[0]).toBeInTheDocument();
      expect(screen.getAllByText("React.js")[0]).toBeInTheDocument();
    });
  });

  describe("Experience", () => {
    it("renders section title and experience items", () => {
      render(<Experience />);
      expect(screen.getByText(/Professional Path/i)).toBeInTheDocument();
      expect(screen.getByText(/Senior Frontend Engineer/i)).toBeInTheDocument();
    });
  });

  describe("Education", () => {
    it("renders section title and education items", () => {
      render(<Education />);
      expect(screen.getByText(/Academic Foundation/i)).toBeInTheDocument();
      expect(screen.getByText(/Stanford University/i)).toBeInTheDocument();
    });
  });

  describe("Projects", () => {
    it("renders section title and project items", () => {
      render(<Projects />);
      expect(screen.getByText(/Big Projects/i)).toBeInTheDocument();
      expect(screen.getByText(/Lumina Analytics Suite/i)).toBeInTheDocument();
    });
  });

  describe("Achievements", () => {
    it("renders section title and achievement items", () => {
      render(<Achievements />);
      expect(screen.getByText(/Achievements & Certifications/i)).toBeInTheDocument();
      expect(screen.getByText(/AWS Solutions Architect/i)).toBeInTheDocument();
    });
  });

  describe("Blogs", () => {
    it("renders section title and blog items", () => {
      render(<Blogs />);
      expect(screen.getByText(/Latest Insights/i)).toBeInTheDocument();
      expect(screen.getByText(/The Future of React Server Components/i)).toBeInTheDocument();
    });
  });

  describe("Contact", () => {
    it("renders contact info and form", () => {
      render(<Contact />);
      expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
      expect(screen.getByText(/hello@devportfolio.com/i)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /Send Message/i })).toBeInTheDocument();
    });
  });
});
