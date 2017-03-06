const path = require('path');

module.exports = {
  entry: './src/core.js',
  output: {
    filename: 'videojs.cuepoints.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'cuepoints',
    libraryTarget: 'umd'
  },
  externals: {
    'video.js': 'video.js'
  }
};
