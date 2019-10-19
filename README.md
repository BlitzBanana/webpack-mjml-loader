# MJML 4 webpack loader

> This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

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
            loader: 'webpack-mjml-loader'
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

Below is a list of commands you will probably find useful.

### `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

### `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

### `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
