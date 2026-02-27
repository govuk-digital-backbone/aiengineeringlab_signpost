const fs = require('fs');
const path = require('path');

describe('Health Checks', () => {
  test('All required includes exist', () => {
    const includes = [
      'app/_includes/custom-page.njk',
      'app/_includes/back-link.njk'
    ];
    for (const inc of includes) {
      expect(fs.existsSync(path.join(__dirname, '..', inc))).toBe(true);
    }
  });
});
