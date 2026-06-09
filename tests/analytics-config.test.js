const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const cookieBannerNjk = fs.readFileSync(
  path.join(root, "app/_includes/cookie-banner.njk"),
  "utf8"
);
const eleventyConfig = fs.readFileSync(
  path.join(root, "eleventy.config.js"),
  "utf8"
);
const builtHtml = fs.readFileSync(
  path.join(root, "docs/index.html"),
  "utf8"
);

describe("Cookie banner file", () => {
  test("cookie-banner.njk exists", () => {
    expect(
      fs.existsSync(path.join(root, "app/_includes/cookie-banner.njk"))
    ).toBe(true);
  });
});

describe("GTM configuration", () => {
  test("cookie-banner.njk contains GTM ID GTM-5SMKQ7QN", () => {
    expect(cookieBannerNjk).toMatch(/GTM-5SMKQ7QN/);
  });

  test("cookie-banner.njk has loadGTM function", () => {
    expect(cookieBannerNjk).toMatch(/function loadGTM\(\)/);
  });

  test("GTM script URL uses googletagmanager.com/gtm.js", () => {
    expect(cookieBannerNjk).toMatch(/googletagmanager\.com\/gtm\.js/);
  });

  test("cookie-banner.njk contains noscript GTM fallback", () => {
    expect(cookieBannerNjk).toMatch(/googletagmanager\.com\/ns\.html/);
  });

  test("cookie-banner.njk does not contain ga-disable flag", () => {
    expect(cookieBannerNjk).not.toMatch(/ga-disable-/);
  });

  test("eleventy.config.js does not reference googleAnalyticsId", () => {
    expect(eleventyConfig).not.toMatch(/googleAnalyticsId/);
  });
});

describe("Secure cookie flags", () => {
  test("cookie-banner.njk uses Secure flag on consent cookie", () => {
    expect(cookieBannerNjk).toMatch(/SameSite=Lax.*Secure|Secure.*SameSite=Lax/);
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
});
