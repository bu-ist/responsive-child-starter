# Responsive Framework Child Theme Starter

## How to Use This Repository

1. Download (don't clone!) the master branch of this repository to your `wp-content/themes` directory
2. Replace all references to "responsive-child-starter" / "Responsive Child Starter" with your theme name
	- package.json
	- bower.json
	- functions.php
	- css-dev/style.scss
3. Update theme metadata (see the checklist below)
4. Install development dependencies
5. Run `grunt` to watch your Sass and Javascript files as you work

Before your initial commit you should also replace this README.md with your own -- be sure to include what site the theme is for and summarize any additional functionality that your theme provides.

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

## Theme Meta Data Checklist

[ ] Is your `package.json` filled out accurately (`name`, `version`, `description`, `contributors`, `repository`)?
[ ] Is your `css-dev/style.scss` filled out accurately (`Description`, `Version`)?
[ ] Does your theme have a README.md file that summarizes what site it is for and what functionality it adds?
[ ] Does your theme have a `screenshot.png` that will help identify it under Appearance > Themes?

## Updating your Theme Version

You may have noticed this line at the top of functions.php:

```php
define( 'RESPONSIVE_THEME_VERSION', '1.0.0' );
```

This is used by the Framework to version static assets for cache busting (`style.css` and `script.js`).

To increment the theme version:

1. Set the new version in`package.json`
2. Run the `grunt version` command
3. Regenerate your static assets (`grunt build`)

This will make sure the version change propogates to `functions.php` and `css-dev/style.scss`.
