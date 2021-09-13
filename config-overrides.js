const { name } = require('./package.json');
const path = require('path');
const paths = require('react-scripts/config/paths');

module.exports = {
  webpack: function override(config, env) {
    // console.log(config.entry);
    // config.entry = config.entry.filter(
    //   (e) => !e.includes('webpackHotDevClient')
    // );
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist');
    config.output.path = path.join(path.dirname(config.output.path), 'dist');
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  },
};
