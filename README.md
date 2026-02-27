# AI Engineering Lab Blueprint

Support for government departments adopting AI coding tools.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

#### Using nvm

If you use `nvm`, set the project Node version and install:

```bash
nvm use || nvm install
```


### Installation

```bash
npm install
```

## Available Commands

### Development Server

Start the development server and view the site on localhost:

```bash
npm run dev
```

The site will be available at `http://localhost:8080`.

### Build

Build the static site:

```bash
npm run build
```

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

Check for dead links in all .md and configuration files:

```bash
npm run dead-links
```
### Format Check

Check code formatting consistency:

```
npm run format:check
```

Format all files:

```
npm run format
```

### Audit

Check for security vulnerabilities:

```
npm run audit
```

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
```b
npm install
```

#### Pre-commit hook fails
Run the check manually to see the error:
```
npm run lint        # Check ESLint issues
npm run format:check # Check formatting issues
```

Fix issues with:
```
npm run lint -- --fix  # Auto-fix ESLint issues
npm run format         # Auto-format files
```

#### Node version mismatch
If you see version-related errors, use nvm:
```bash
nvm use
npm install
```

## Architecture

This is an Eleventy-based static site generator with the GOV.UK Frontend plugin.

- **Design System**: GOV.UK Frontend
- **Generator**: 11ty (Eleventy)
- **Templating**: Nunjucks
- **Quality**: ESLint, Prettier, Jest, Husky