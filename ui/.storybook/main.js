module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "storybook-addon-apollo-client",
    "@storybook/addon-knobs/register",
    "storybook-addon-playwright/preset",
    "storybook-addon-playwright/register"
  ]
}