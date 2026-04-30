import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

describe("Layout Components", () => {
  describe("Header", () => {
    it("renders the logo text", () => {
      render(<Header />);
      expect(screen.getByText(/<Do Kim Hoan \/>/i)).toBeInTheDocument();
    });

    it("renders navigation links", () => {
      render(<Header />);
      const links = ["Skills", "Experience", "Projects", "Blog", "Contact"];
      links.forEach((link) => {
        expect(screen.getByText(link)).toBeInTheDocument();
      });
    });

    it("renders the Resume button", () => {
      render(<Header />);
      expect(screen.getByRole("button", { name: /resume/i })).toBeInTheDocument();
    });
  });

  describe("Footer", () => {
    it("renders the copyright text", () => {
      render(<Footer />);
      expect(screen.getByText(/DO KIM HOAN • SOFTWARE ENGINEER/i)).toBeInTheDocument();
    });

    it("renders social links", () => {
      render(<Footer />);
      expect(screen.getByText("Github")).toBeInTheDocument();
      expect(screen.getByText("LinkedIn")).toBeInTheDocument();
      expect(screen.getByText("Twitter")).toBeInTheDocument();
    });
  });
});
