const rules = require("./rules.webpack");

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

module.exports = {
  // Put your normal webpack config below hereresolve: {
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules,
  },
};
