module.exports = function getRules() {
  return [
    ...getScriptsRules(),
    ...getStylesRules(),
    ...getResourcesRules(),
  ];
}

function getScriptsRules() {
  return [
    {
      test: /\.ts(x?)$/,
      use: "ts-loader",
      exclude: /node_modules/,
    }
  ];
}

function getStylesRules() {
  return [
    {
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
      ],
      include: /\.module\.css$/,
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      exclude: /\.module\.css$/,
    },
  ];
}

function getResourcesRules() {
  return [
    {
      test: /\.(png|jpg|jpeg|svg|gif)$/i,
      type: "asset/resource",
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
  ];
}
