const path = require('path')
const glob = require('glob')
const PurgecssPlugin = require('purgecss-webpack-plugin')

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      const { purgeCss } = nextConfig

      const defaultPurgeCss = {
        paths: glob.sync(
          `${path.join(config.context, '+(pages|components)')}/**/*`,
          { nodir: true }
        )
      }

      const purgeCssOptions = Object.assign({}, defaultPurgeCss, purgeCss)

      config.plugins.push(new PurgecssPlugin(purgeCssOptions))

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
