import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
    retries: 0,
    use: {
        trace: 'on-first-retry',
        headless: false,
    },
    // globalTimeout: 60000,
    // timeout: 60000,
    projects: [
      {
        name: 'Chrome Stable',
        use: {
          browserName: 'chromium',
          // Test against Chrome Stable channel.
          channel: 'chrome',
        },
      },
    //   {
    //     name: 'Desktop Safari',
    //     use: {
    //       browserName: 'webkit',
    //       viewport: { width: 1200, height: 750 },
    //     }
    //   },
    //   {
    //     name: 'Desktop Firefox',
    //     use: {
    //       browserName: 'firefox',
    //       viewport: { width: 800, height: 600 },
    //     }
    //   },
    ],
  };
  export default config;
