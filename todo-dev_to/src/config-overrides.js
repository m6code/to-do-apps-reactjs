const {
    override,
    addDecoratorsLegacy,
  } = require("customize-cra");
  const path = require("path");
  
  module.exports = override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
  );
  