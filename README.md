# Responsive Framework Child Theme Starter

## How to Use This Repository

1. Download (don't clone!) the master branch of this repository to your `wp-content/themes` directory
2. Replace all references to "responsive-child-starter" / "Responsive Child Starter" with your theme name
	- package.json
	- bower.json
	- functions.php
	- css-dev/style.scss
3. Install development dependencies
4. Run `grunt` to watch your Sass and Javascript files as you work

## Installing Development Dependencies

Before you begin, make sure [Node / Node Package Manager](http://nodejs.org/) are installed and the following dependencies are installed globally.

```bash
$ npm install -g grunt-cli bower
$ sudo gem install bundler
```

This only needs to be done once.

Fire up Terminal, change to your theme directory and run the following commands:

```bash
$ npm install
$ bundle install
$ bower install
```

This will install all of your local development dependencies. These commands only need to be run once per theme.
