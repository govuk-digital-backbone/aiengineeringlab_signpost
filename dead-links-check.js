#!/usr/bin/env node
// dead-links-check.js
// Checks for dead links in all .md and config files in the repo.

import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const LINK_REGEX = /https?:\/\/[^\s)>'"\]`]+/g;

function cleanUrl(url) {
  return url.replace(/[,.;:!?`]+$/, '');
}


function walk(dir, ext) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath, ext));
    } else if (filePath.endsWith(ext)) {
      results.push(filePath);
    }
  });
  return results;
}

function getAllFiles() {
  let files = [];
  const readmeFile = path.resolve('README.md');
  const configFile = path.resolve('eleventy.config.js');
  if (fs.existsSync(readmeFile)) {
    files.push(readmeFile);
  }
  if (fs.existsSync(configFile)) {
    files.push(configFile);
  }
  files = files.concat(walk(path.resolve('app'), '.md'));
  return files;
}

function extractLinks(file) {
  const content = fs.readFileSync(file, 'utf8');
  return (content.match(LINK_REGEX) || [])
    .map((url) => cleanUrl(url))
    .map((url) => ({ file, url }));
}

function checkLink(url) {
  return new Promise((resolve) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, (res) => {
      resolve(res.statusCode < 400);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(5000, () => {
      req.abort();
      resolve(false);
    });
  });
}

(async () => {
  const files = getAllFiles();
  let allLinks = [];
  files.forEach((file) => {
    allLinks = allLinks.concat(extractLinks(file));
  });
  if (allLinks.length === 0) {
    console.log('No links found.');
    process.exit(0);
  }
  let hasDead = false;
  for (const { file, url } of allLinks) {
    const live = await checkLink(url);
    if (!live) {
      console.error(`DEAD LINK: ${url} (in ${file})`);
      hasDead = true;
    } else {
      console.log(`OK: ${url}`);
    }
  }
  if (hasDead) {
    process.exit(1);
  } else {
    console.log('All links are live.');
    process.exit(0);
  }
})();
