# Changelog

## Unreleased

- Enables stylelint and automatic style fixes using the following commands:
  - `npm run styles:lint` - Run a linting report.
  - `npm run styles:fix` - Run a linting report and fix issues automatically.
- Removes grunt-phplint due to security issues

## 2.2.1

- Bump Foundation version for new event fields styling on calendar template.

## 2.2.0

- Add autoprefixer support with grunt-postcss plugin.
- Add browserslist support in package.json for front-end tools like
  autoprefixer.
- Add es6 functionality via a variety of npm packages and Gruntfile
  modifications:
    - `grunt-browserify`: A bundler that allows for easier dependency management
      and gives the ability to use `require` for separating files into modules.
      Polyfills the `require` function used in Node for the browser.
    - `babelify`: Provides a transform for browserify so we can write es6 code.
      This includes using modern `import` and `export` features rather than
      having to use `require`. This package will transpile es6 code into es5
      which browserify can bundle for the browser.
    - `@babel/core`: Required babel library for `babelify` package.
    - `@babel/preset-env`: The recommended "smart" preset for configuring babel
      to take advantage of latest es6 features.
    - `@wordpress/babel-preset-default`: Adds WordPress es6 configurations.
    - `@wordpress/eslint-plugin`: Adds linting rules to adhere to WordPress
      standards for the `eslint` package.
    - `browserify-shim`: makes CommonJS incompatible files browserifyable (files
      that don’t support `require` from the CommonJS module syntax). Also allows
      us to determine what global variables we will use in our project that will
      NOT be bundled, such as jQuery.
    - `eslint` For code climate and text editors to lint and autofix their code.
    - Updates `grunt-contrib-clean` to 2.0.0. Also adds a clean:js task to clear
      contents of directories for new compiled files to reside in, so that old
      irrelevant files don't stick around.
- Adds `grunt-sass-lint` for separate `grunt sasslint` task.
- Adds `browserslist` to package.json so front-end tooling packages like `babel`
  and `autoprefixer` can share the same configurations
  for browser support.
- Adds `.babelrc` configuration file for es6 configs.
- Adds `.eslintrc.json` configuration file for eslint configs.
- Adds `.sasslintrc` for grunt sasslint command and code climate.
- Pulls in Responsive Foundation as an es6 module.
- Updates codeclimate to use eslint-5 and sass-lint instead of scss-lint which
  will eventually be deprecated or will not support latest sass features.

## 2.1.0

- Adds Foundation 3.1.0 support, which enables mega menu as
a default option. See details at https://github.com/bu-ist/responsive-foundation/releases/tag/3.1.0
