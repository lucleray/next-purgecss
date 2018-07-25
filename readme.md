# next-purgecss

Next.js + Purgecss = 🔥

[Purgecss](https://www.purgecss.com/) helps you remove unused CSS.

## Installation

`next-purgecss` requires one of the following **css next plugins** :

- [next-css](https://github.com/zeit/next-plugins/tree/master/packages/next-css)
- [next-less](https://github.com/zeit/next-plugins/tree/master/packages/next-less)
- [next-sass](https://github.com/zeit/next-plugins/tree/master/packages/next-sass)

Just pick the one that fits your needs.

For example, install `next-css` and `next-purgecss` :

```
yarn install @zeit/next-css next-purgecss --dev
```

or

```
npm install @zeit/next-css next-purgecss --save-dev
```

2.  `next-css` (or the other **css next plugin** of your choice) compiles your stylesheet to `.next/static/style.css` and make it available on the server at `/_next/static/style.css`, so you need to include it in your page.

Add a link tag to your `pages/_document.js` :

```js
// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
```

More information : [next-css](https://github.com/zeit/next-plugins/tree/master/packages/next-css).

3.  Edit `next.config.js`.

For example, with `next-css` :

```js
// next.config.js
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

module.exports = withCss(withPurgeCss())
```

## Options

By default, this plugin will scan `components` and `pages`
directories for classnames.

You can pass custom options to
[Purgecss](https://github.com/FullHuman/purgecss-webpack-plugin) by defining
`purgeCss` object in your `next.config.js`.

```js
// next.config.js
module.exports = withCss(
  withPurgeCss({
    purgeCss: {
      whitelist: () => ['my-custom-class']
    }
  })
)
```

The list of available options are documented in [`purgecss-webpack-plugin`
docs](https://github.com/FullHuman/purgecss-webpack-plugin#options).
