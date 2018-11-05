const withLess = require('@zeit/next-less')
const withPurgeCss = require('next-purgecss')

module.exports = withLess(withPurgeCss())
