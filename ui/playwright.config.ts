import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
    retries: 2,
    use: {
        trace: 'off',
        headless: true,
    },
    timeout: 45000,
    projects: [
      {
        name: 'Chrome',
        use: {
          browserName: 'chromium',
          // Test against Chrome Stable channel.
          channel: 'chrome',
        },
      },
      {
        name: 'Safari',
        use: {
          browserName: 'webkit',
          viewport: { width: 1200, height: 750 },
        }
      },
      {
        name: 'Firefox',
        use: {
          browserName: 'firefox',
          viewport: { width: 800, height: 600 },
        }
      },
    ],
  };
  export default config;
