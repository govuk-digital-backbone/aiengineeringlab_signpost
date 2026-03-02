import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      serviceName: 'AI Engineering Lab',
      serviceUrl: '/'
    },
    serviceNavigation: {
      navigation: [
        { text: 'Home', href: '/' },
        { text: 'Explore', href: '/explore/' },
        { text: 'Roles', href: '/roles/' }
      ]
    },
    footer: {
      meta: {
        items: [
          { text: 'Privacy', href: 'https://www.gov.uk/help/privacy' },
          { text: 'Cookies', href: 'https://www.gov.uk/help/cookies' },
          { text: 'Contact', href: 'https://www.gov.uk/contact' },
          { text: 'Accessibility statement', href: 'https://www.gov.uk/help/accessibility-statement' }
        ]
      }
    }
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'docs'
    },
    pathPrefix: '/aiengineeringlab_signpost/'
  }
}
