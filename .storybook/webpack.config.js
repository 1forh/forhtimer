const path = require('path');

module.exports = function({ config }) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.dirname(path.resolve(__dirname)),
    '~': path.dirname(path.resolve(__dirname)),
  };

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-docgen-loader',
    options: {
      docgenOptions: {
        alias: config.resolve.alias,
      },
    },
    enforce: 'post',
  });

  config.module.rules.push({
    test: /\.js$/,
    resourceQuery: /component/,
    loader: 'vue-docgen-loader',
    enforce: 'post',
  });

  config.module.rules.push({
    test: /\.stories\.js$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [path.resolve(__dirname, '../assets/styles/base/_index.scss')],
        },
      },
    ],
  });

  return config;
};
