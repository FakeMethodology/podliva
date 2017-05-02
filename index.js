'use strict';

const path = require('path');

module.exports = (mainPath, configPath) => {
  const mainFile = require(path.resolve(process.cwd(), mainPath));
  const configFile = require(path.resolve(process.cwd(), configPath));

  return configFile(mainFile);
};

