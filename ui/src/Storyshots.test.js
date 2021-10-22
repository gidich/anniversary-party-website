import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import playwright from "playwright";

let browser;
let storybookUrl = "http://localhost:8081/"

let testFn = imageSnapshot({
    storybookUrl,
    getCustomBrowser: async () => {
      browser =  playwright.chromium.launch();
      return browser;
    },
  });


initStoryshots(
 { test: testFn,}
);
