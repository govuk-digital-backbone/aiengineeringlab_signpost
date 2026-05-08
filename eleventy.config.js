import { govukEleventyPlugin } from "@x-govuk/govuk-eleventy-plugin";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      serviceName: "AI Engineering Lab",
      serviceUrl: "/",
    },
    serviceNavigation: {
      navigation: [
        { text: "Home", href: "/" },
        { text: "Explore", href: "/explore/" },
        { text: "Roles", href: "/roles/" },
      ],
    },
  });

  eleventyConfig.addPassthroughCopy("app/assets/custom.css");

  return {
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "app",
      output: "docs",
    },
    pathPrefix: "/aiengineeringlab_signpost/",
  };
}
