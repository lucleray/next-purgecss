const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

module.exports = withCss(
  withPurgeCss({
    purgeCssPaths: ['pages/**/*', 'components/**/*', 'other-components/**/*'],
    purgeCss: {
      whitelist: () => ['unused-but-whitelisted-class']
    }
  })
)
