import { test, expect } from "@playwright/test";

test.describe("Portfolio Navigation", () => {
  test("should render the home page with all sections", async ({ page }) => {
    await page.goto("/");

    // Check Header
    await expect(page.getByText(/<Do Kim Hoan \/>/)).toBeVisible();

    // Check Hero
    await expect(page.getByText(/Hi all, I'm Hoan/)).toBeVisible();

    // Check Skills
    await expect(page.getByText(/Technical Proficiency/)).toBeVisible();

    // Check Experience
    await expect(page.getByText(/Professional Path/)).toBeVisible();

    // Check Education
    await expect(page.getByText(/Academic Foundation/)).toBeVisible();

    // Check Projects
    await expect(page.getByText(/Big Projects/)).toBeVisible();

    // Check Achievements
    await expect(page.getByText(/Achievements & Certifications/)).toBeVisible();

    // Check Blogs
    await expect(page.getByText(/Latest Insights/)).toBeVisible();

    // Check Contact
    await expect(page.getByText(/Contact Me/)).toBeVisible();

    // Check Footer
    await expect(page.getByText(/DO KIM HOAN • SOFTWARE ENGINEER/)).toBeVisible();
  });

  test("should have working navigation links", async ({ page }) => {
    await page.goto("/");

    const links = ["Skills", "Experience", "Projects", "Blog", "Contact"];
    for (const linkText of links) {
      const link = page.locator(`nav >> text=${linkText}`).first();
      await expect(link).toHaveAttribute("href", new RegExp(`^#.*`));
    }
  });
});
