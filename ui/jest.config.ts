const { defaults } = require("jest-config");
module.exports = {
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  setupFilesAfterEnv: ['./jest.setup.js'],
  // ...
};
