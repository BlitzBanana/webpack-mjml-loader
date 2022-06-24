# MJML webpack loader

[![npm](https://badgen.net/npm/v/webpack-mjml-loader)](https://www.npmjs.com/package/webpack-mjml-loader)
[![npm](https://badgen.net/npm/dm/webpack-mjml-loader)](https://www.npmjs.com/package/webpack-mjml-loader)
[![GitHub Actions](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FBlitzBanana%2Fwebpack-mjml-loader%2Fbadge&label=build&logo=none)](https://actions-badge.atrox.dev/BlitzBanana/webpack-mjml-loader/goto)

This webpack loader transforms your MJML files into html strings to be imported in nodejs. MJML is linked as peer dependency so you can use the version that you want.

> This is for webpack 5, for webpack 4 see [v1.1.0](https://github.com/BlitzBanana/webpack-mjml-loader/tree/v1.1.0)

## Usage

Install the package as devDependency:
```sh
yarn add -D webpack-mjml-loader
```

Install MJML package as devDependency:
```sh
yarn add -D mjml
```

Update your webpack config:
```js
// webpack.config.js

module.exports = {
  /* The rest of your webpack config */
  module: {
    rules: [
      /* Your other rules like babel-loader */
      {
        test: /\.mjml$/,
        use: [
          {
            loader: 'webpack-mjml-loader',
            options: { /* any mjml options */ minify: true } // optional, you can omit options
          }
        ]
      }
    ]
  }
}
```

Enjoy !
```js
import { default as foobarTemplate } from './foobar.mjml'

sendEmail(foobarTemplate, { /* my options */ })
```


## Local Development

> This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

Below is a list of commands you will probably find useful.

### `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

### `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

### `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
