import { readFileSync, writeFileSync } from 'fs'

const file = 'node_modules/@x-govuk/govuk-eleventy-plugin/src/events/generate-govuk-assets.js'

try {
  let content = readFileSync(file, 'utf8')
  if (content.includes('${assetPath}') && !content.includes('assetPath.replace')) {
    content = content.replace(
      '${assetPath}',
      '${assetPath.replace(/\\\\/g, "/")}'
    )
    writeFileSync(file, content)
    console.log('Patched govuk-eleventy-plugin for Windows paths')
  } else {
    console.log('Patch already applied or not needed')
  }
} catch (e) {
  console.log('Patch skipped:', e.message)
}
