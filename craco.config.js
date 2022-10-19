const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
};
