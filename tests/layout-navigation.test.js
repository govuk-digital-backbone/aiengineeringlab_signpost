const fs = require("fs");
const path = require("path");

describe("Layout and Navigation", () => {
  const pages = [
    "app/explore/community-events.md",
    "app/explore/change-management.md",
    "app/explore/how-to-adopt-ai-coding-tools.md",
    "app/explore/request-and-set-up-licences.md",
    "app/explore/contact-us.md",
    "app/explore/what-ai-coding-tools-can-do.md",
    "app/roles/software-engineers.md",
    "app/roles/delivery-teams.md",
    "app/roles/champions.md",
    "app/roles/senior-leaders.md",
    "app/roles/sponsors.md",
  ];
  const homepage = "app/index.md";

  test("All non-home pages use custom layout with back button", () => {
    for (const file of pages) {
      const filePath = path.join(__dirname, "..", file);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, "utf8");
        expect(content).toMatch(
          /layout:\s+\.\.\/(_includes)\/custom-page\.njk/
        );
      }
    }
  });

  test("Homepage uses custom layout", () => {
    const content = fs.readFileSync(
      path.join(__dirname, "..", homepage),
      "utf8"
    );
    expect(content).toMatch(/custom-page\.njk/);
  });
});
