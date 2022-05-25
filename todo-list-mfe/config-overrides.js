const { override, disableChunk, addWebpackExternals } = require('customize-cra');

const BUNDLE_NAME = 'todo-list';

function changeName(config) {
  config.output = {
    ...config.output,
    filename: `static/js/${BUNDLE_NAME}.js`,
  };

  config.plugins.map((plugin, i) => {
    if (plugin.options && plugin.options.filename && plugin.options.filename.includes('static/css')) {
      config.plugins[i].options = {
        ...config.plugins[i].options,
        filename: `static/css/${BUNDLE_NAME}.css`,
      };
    }
  });

  return config;
}

module.exports = override(
  changeName,
  disableChunk(),
  addWebpackExternals({
    react: 'React',
    'react-dom': 'ReactDOM',
  }),
);
