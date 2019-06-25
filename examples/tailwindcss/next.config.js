const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g)
  }
}

module.exports = withCss(withPurgeCss({}))
