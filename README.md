# AI Engineering Lab Signpost

Support for government departments adopting AI coding tools.

Built with [Eleventy](https://www.11ty.dev/) and the [GOV.UK Eleventy Plugin](https://x-govuk.github.io/govuk-eleventy-plugin/).

**Live site:** [https://govuk-digital-backbone.github.io/aiengineeringlab_signpost/](https://govuk-digital-backbone.github.io/aiengineeringlab_signpost/)

## Project Structure

```
├── app/                    # Source content (Eleventy input)
│   ├── _includes/          # Nunjucks templates and partials
│   │   ├── back-link.njk
│   │   ├── custom-page.njk
│   │   └── custom-sub-navigation.njk
│   ├── explore/            # "Explore" section pages (.md)
│   ├── roles/              # "Roles" section pages (.md)
│   └── index.md            # Homepage
├── docs/                   # Built output (GitHub Pages serves from here)
├── .husky/                 # Git hooks (Husky)
├── eleventy.config.js      # Eleventy configuration
├── eslint.config.js        # ESLint flat config
├── patch-sass.js           # Windows path fix for govuk-eleventy-plugin
├── dead-links-check.js     # Checks .md files for broken URLs
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
```

> **Note:** The `postinstall` script automatically runs `patch-sass.js` to fix Windows path issues in the GOV.UK Eleventy Plugin.

## Available Commands

### Development Server

Start the development server and view the site on localhost:

```bash
npm run dev
```

The site will be available at `http://localhost:8080`.

### Build

Build the static site to the `docs/` directory:

```bash
npm run build
```

The output is written to `docs/` (configured in `eleventy.config.js`) and is served by GitHub Pages.

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

### Tests

Run tests:

```bash
npm test
```

### Dead Links Check

Check for dead links in all `.md` and configuration files:

```bash
npm run dead-links
```

### Format Check

Check code formatting consistency:

```bash
npm run format:check
```

Format all files:

```bash
npm run format
```

### Audit

Check for security vulnerabilities:

```bash
npm run audit
```

## Deployment

The site is deployed via **GitHub Pages** from the `docs/` folder.

### How it works

1. Eleventy builds the source files from `app/` into `docs/`
2. The `pathPrefix` in `eleventy.config.js` is set to `/aiengineeringlab_signpost/` so all generated URLs include the repository name
3. GitHub Pages serves the contents of `docs/` at `https://govuk-digital-backbone.github.io/aiengineeringlab_signpost/`

### To deploy

1. Make content changes in `app/`
2. Run `npm run build`
3. Commit and push (including the `docs/` folder)

## Development Setup

### Pre-commit Hooks

This project uses Husky and lint-staged to enforce code quality checks before commits.

After `npm install`, commits will automatically:

- Run ESLint with `--fix` on changed JS files
- Run Prettier on changed markdown, JSON, and style files

If a check fails, the commit is blocked. Fix the issues and try again.

### Troubleshooting

#### Husky hooks not running after install

Ensure all dependencies are installed:

```bash
npm install
```

#### Pre-commit hook fails

Run the check manually to see the error:

```bash
npm run lint        # Check ESLint issues
npm run format:check # Check formatting issues
```

Fix issues with:

```bash
npm run lint -- --fix  # Auto-fix ESLint issues
npm run format         # Auto-format files
```

#### Node version mismatch

If you see version-related errors, ensure you are using Node.js 18 or higher:

```bash
node --version
```

#### Missing packages after install

If Eleventy fails with missing package errors, try a clean install:

```bash
rm -rf node_modules
npm install
```

## Architecture

- **Static Site Generator:** [Eleventy (11ty) v3](https://www.11ty.dev/)
- **Design System:** [GOV.UK Frontend](https://frontend.design-system.service.gov.uk/) via [@x-govuk/govuk-eleventy-plugin](https://x-govuk.github.io/govuk-eleventy-plugin/)
- **Templating:** Nunjucks (`.njk`)
- **Content:** Markdown (`.md`)
- **Code Quality:** ESLint, Prettier, Husky, lint-staged
- **Testing:** Jest
- **Hosting:** GitHub Pages (from `docs/` directory)
