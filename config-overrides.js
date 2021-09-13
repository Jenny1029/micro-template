/* config-overrides.js */
const path = require("path");

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    // 修改path目录
    const path = require('path');
    const paths = require('react-scripts/config/paths');
    paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist');
    config.output.path = path.join(path.dirname(config.output.path), 'dist');
    config.output.filename = 'static/js/microbasic.js';
    return config;
}