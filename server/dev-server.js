const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const history = require('connect-history-api-fallback');

const PORT = 8080;

const app = express();
const getConfig = require("../webpack/config.js");

const webpackEnv = { production: false };
const config = getConfig(webpackEnv);
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
const wdm = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
});

app.use(history());
app.use(wdm);

app.listen(PORT, () => {
  console.log(`The app is available at http://localhost:${PORT}\n`);
});
