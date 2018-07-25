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

      const { purgecssOptions } = nextConfig

      config.plugins.push(
        new PurgecssPlugin({
          paths: glob.sync(
            `${path.join(process.cwd(), '+(pages|components)')}/**/*`,
            { nodir: true }
          ),
          ...purgecssOptions
        })
      )

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
