const path = require('path')
const glob = require('glob-all')
const PurgecssPlugin = require('purgecss-webpack-plugin')

module.exports = ({
  purgeCssEnabled = () => true,
  purgeCss = {},
  purgeCssPaths = ['pages/**/*', 'components/**/*'],
  webpack,
  ...nextConfig
} = {}) => ({
  // pass nextConfig
  ...nextConfig,

  // overwrite webpack config
  webpack: (webpackConfig, options) => {
    const { dev, isServer } = options

    // Only add plugin when PurgeCSS is enabled
    if (purgeCssEnabled({ dev, isServer })) {
      webpackConfig.plugins.push(
        new PurgecssPlugin({
          paths: () =>
            glob.sync(
              purgeCssPaths.map(p => path.join(webpackConfig.context, p)),
              {
                nodir: true
              }
            ),
          ...purgeCss
        })
      )
    }

    if (typeof webpack === 'function') {
      return webpack(webpackConfig, options)
    }

    return webpackConfig
  }
})
