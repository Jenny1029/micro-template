/* config-overrides.js */
const path = require("path");

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.output.path = path.join(path.dirname(config.output.path), "dist");
    return config;
}