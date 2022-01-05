// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  publicPath: "/dist/",
  outputDir: path.resolve(__dirname, "../static/src/vue/dist/"),
  filenameHashing: false,
  runtimeCompiler: true,
  devServer: {
    writeToDisk: true,
  },
};
