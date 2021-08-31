module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './electron/main.js',
  // Put your normal webpack config below here
  module: {
    rules: require('./rules.webpack'),
  },
};
