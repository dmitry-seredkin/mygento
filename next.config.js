const path = require('path')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = withPlugins(
  [[optimizedImages, { optimizeImages: false }]],
  {
    webpack(config, options) {
      const { plugins: resolvePlugins } = config.resolve
      const plugins = [
        new TSConfigPathsPlugin({
          configFile: path.resolve(__dirname, './tsconfig.json')
        })
      ]

      config.resolve.plugins = resolvePlugins
        ? resolvePlugins.concat(plugins)
        : plugins

      return config
    }
  }
)