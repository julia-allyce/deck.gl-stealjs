var stealTools = require("steal-tools");

stealTools.build({
  config: __dirname + "/package.json!npm"
}, {
  bundleAssets: {
    infer: true
  },
  minify: true,
  quiet: false,
  verbose: false
});