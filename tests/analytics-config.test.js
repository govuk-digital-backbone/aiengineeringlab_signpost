const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const analyticsNjk = fs.readFileSync(
  path.join(root, "app/_includes/analytics.njk"),
  "utf8"
);
const cookieBannerNjk = fs.readFileSync(
  path.join(root, "app/_includes/cookie-banner.njk"),
  "utf8"
);
const eleventyConfig = fs.readFileSync(
  path.join(root, "eleventy.config.js"),
  "utf8"
);
const deployYml = fs.readFileSync(
  path.join(root, ".github/workflows/deploy.yml"),
  "utf8"
);
const builtHtml = fs.readFileSync(
  path.join(root, "docs/index.html"),
  "utf8"
);
const builtWithGA = builtHtml.includes("ga-disable");
describe("Analytics template files exist", () => {
  test("analytics.njk exists", () => {
    expect(
      fs.existsSync(path.join(root, "app/_includes/analytics.njk"))
    ).toBe(true);
  });

  test("cookie-banner.njk exists", () => {
    expect(
      fs.existsSync(path.join(root, "app/_includes/cookie-banner.njk"))
    ).toBe(true);
  });
});

describe("Anonymize IP", () => {
  test("cookie-banner.njk sets anonymize_ip: true", () => {
    expect(cookieBannerNjk).toMatch(/anonymize_ip:\s*true/);
  });

  test("built HTML contains anonymize_ip: true", () => {
    if (!builtWithGA) return;
    expect(builtHtml).toMatch(/anonymize_ip:\s*true/);
  });
});

describe("Cookie consent — GA disabled by default", () => {
  test("analytics.njk sets ga-disable flag to true by default", () => {
    expect(analyticsNjk).toMatch(/window\['ga-disable-' \+ window\.GA_ID\]\s*=\s*true/);
  });

  test("built HTML has ga-disable set to true on page load", () => {
    if (!builtWithGA) return;
    expect(builtHtml).toMatch(/window\['ga-disable-'.*\]\s*=\s*true/);
  });

  test("GA script src is not hardcoded in analytics.njk", () => {
    expect(analyticsNjk).not.toMatch(/googletagmanager\.com/);
  });

  test("GA script only loaded inside loadGA() in cookie-banner.njk", () => {
    expect(cookieBannerNjk).toMatch(/function loadGA\(\)/);
    expect(cookieBannerNjk).toMatch(/googletagmanager\.com\/gtag\/js/);
  });
});

describe("Secure cookie flags", () => {
  test("cookie-banner.njk uses SameSite=None;Secure on GA cookies", () => {
    expect(cookieBannerNjk).toMatch(/cookie_flags.*SameSite=None;Secure/);
  });

  test("cookie-banner.njk uses Secure flag on consent cookie", () => {
    expect(cookieBannerNjk).toMatch(/SameSite=Lax.*Secure|Secure.*SameSite=Lax/);
  });
});

describe("GA ID stored securely — not hardcoded", () => {
  test("eleventy.config.js reads GA ID from environment variable", () => {
    expect(eleventyConfig).toMatch(/process\.env\.GA_MEASUREMENT_ID/);
  });

  test("eleventy.config.js does not hardcode a real GA ID", () => {
    expect(eleventyConfig).not.toMatch(/"G-[A-Z0-9]+"/);
  });

  test("deploy.yml passes GA_MEASUREMENT_ID from GitHub Secrets", () => {
    expect(deployYml).toMatch(/GA_MEASUREMENT_ID.*secrets\.GA_MEASUREMENT_ID/);
  });
});

describe("Cookie banner structure", () => {
  test("cookie-banner.njk has accept button", () => {
    expect(cookieBannerNjk).toMatch(/data-accept-cookies/);
  });

  test("cookie-banner.njk has reject button", () => {
    expect(cookieBannerNjk).toMatch(/data-reject-cookies/);
  });

  test("cookie-banner.njk has hide button", () => {
    expect(cookieBannerNjk).toMatch(/data-hide-cookie-banner/);
  });

  test("cookie-banner.njk uses GOV.UK cookie banner class", () => {
    expect(cookieBannerNjk).toMatch(/govuk-cookie-banner/);
  });

  test("cookie-banner.njk is wrapped in googleAnalyticsId conditional", () => {
    expect(cookieBannerNjk).toMatch(
      /\{%\s*if\s*options\.googleAnalyticsId\s*%\}/
    );
  });

  test("built HTML includes cookie banner", () => {
    if (!builtWithGA) return;
    expect(builtHtml).toMatch(/id="cookie-banner"/);
    expect(builtHtml).toMatch(/data-accept-cookies/);
    expect(builtHtml).toMatch(/data-reject-cookies/);
  });
});
