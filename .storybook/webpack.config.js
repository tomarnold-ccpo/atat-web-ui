// https://www.damirscorner.com/blog/posts/20200814-ConfiguringStorybookForVueWithTypescript.html

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require('path')

module.exports = async ({ config }) => {
  config.resolve.alias['~storybook'] = path.resolve(__dirname)

  config.module.rules.push({
    resourceQuery: /blockType=story/,
    loader: 'vue-storybook',
  })

  config.module.rules.push({
    test: /\.ts$/,
    loader: "ts-loader",
    options: { appendTsSuffixTo: [/\.vue$/] },
  });

  config.resolve.plugins = config.resolve.plugins || [];
  config.resolve.plugins.push(new TsconfigPathsPlugin({}));

  config.module.rules.push({
    test: /\.s(a|c)ss$/,
    use: ['vue-style-loader', 'css-loader', {

      loader: 'sass-loader',
      options: {
      implementation: require('sass')
      }
    }],
    include: path.resolve(__dirname, '../'),
  })

  return config
}
