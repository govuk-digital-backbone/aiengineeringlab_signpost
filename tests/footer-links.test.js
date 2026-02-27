
const https = require('https');

const footerLinks = [
  'https://www.gov.uk/help/privacy',
  'https://www.gov.uk/help/cookies',
  'https://www.gov.uk/contact',
  'https://www.gov.uk/help/accessibility-statement'
];

function checkLinkLive(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode < 400);
    }).on('error', () => resolve(false));
  });
}

describe('Footer Links', () => {
  test('Footer config contains correct GOV.UK links', () => {
    const fs = require('fs');
    const path = require('path');
    const config = fs.readFileSync(path.join(__dirname, '../eleventy.config.js'), 'utf8');
    expect(config).toMatch(/text: 'Privacy', href: 'https:\/\/www.gov.uk\/help\/privacy'/);
    expect(config).toMatch(/text: 'Cookies', href: 'https:\/\/www.gov.uk\/help\/cookies'/);
    expect(config).toMatch(/text: 'Contact', href: 'https:\/\/www.gov.uk\/contact'/);
    expect(config).toMatch(/text: 'Accessibility statement', href: 'https:\/\/www.gov.uk\/help\/accessibility-statement'/);
  });
// Skipping this test for now as external link dependency.
  test.skip('Footer links are live (not dead)', async () => {
    for (const url of footerLinks) {
      const live = await checkLinkLive(url);
      expect(live).toBe(true);
    }
  });
});
