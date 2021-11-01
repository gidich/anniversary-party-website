const { setConfig } = require("storybook-addon-playwright/configs");
const playwright = require("playwright");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "storybook-addon-apollo-client",
    // "@storybook/addon-knobs/dist/register",
    // "storybook-addon-playwright/preset",
    // "storybook-addon-playwright/register",
  ],
};

// (async () => {
//   let browser = {
//     chromium: await playwright["chromium"].launch({headless: false, slowMo: 50}),
//     //firefox: await playwright["firefox"].launch(),
//     //webkit: await playwright["webkit"].launch(),
//   };
//   setConfig({
//     storybookEndpoint: `http://localhost:8081/`,
//     getPage: async (browserType, options) => {
//       const page = await browser[browserType].newPage(options);
//       return page;
//     },
//     afterScreenshot: async (page) => {
//       await page.close();
//     },
//   });
// })();
