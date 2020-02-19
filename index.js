#!/usr/bin/env node
var argv = require('yargs')
    .usage('Usage: clickbait [URL...]')
    .demandCommand(1)
    .argv;

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(process.argv[2]);
  const screenshotPath = `${Date.now()}.png`
  await page.screenshot({
      fullPage: true,
      path: screenshotPath
  });
  console.log(`Saved screenshot as ${screenshotPath}`);
  await browser.close();
})();
