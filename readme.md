# next-purgecss

1.  Install `next-css` and `next-purgecss` :

```
yarn install @zeit/next-css next-purgecss --dev
```

or

```
npm install @zeit/next-css next-purgecss --save-dev
```

2.  Next-css compiles your stylesheet to `.next/static/style.css`, so you need to include it in your page.

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

3.  Edit `next.config.js`

```js
// next.config.js
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

module.exports = withCss(withPurgeCss())
```
