const path = require("path");

module.exports = {
  //storybook endpoint
  storybookUrl: "http://localhost:8081/",
  //storybook config folder
  storybookDir: path.join(__dirname, "../.storybook"),
  //dir of reference images
  screenDir: path.join(__dirname, "../images"),
  //dir of new images
  reportDir: path.join(__dirname, "../report"),
  //allowed threshold of error in images
  diffOptions: { threshold: 0.1 },
  maxRetries: 0,
  browsers: {
    chrome: {
      browserName: "chrome",
      viewport: { width: 1024, height: 720 },
      // Increse parallel sessions
      limit: 1,
    },
    firefox: {
      browserName: "firefox",
      viewport: { width: 1024, height: 720 },
      // Increse parallel sessions
      limit: 1,
    },
  },
};
