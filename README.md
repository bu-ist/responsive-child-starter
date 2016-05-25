
# How to Use This Repository

1. Download (don't clone!) the master branch of this repository to your `wp-content/themes` directory
2. Replace all references to "responsive-child-starter" / "Responsive Child Starter" with your theme name
	- package.json
	- bower.json
	- functions.php
	- css-dev/style.scss
		-	Theme Name: Responsive Child Starter (R)
		-	Author: Boston University Interactive Design
		-	Website: http://www.bu.edu/interactive-design/
		-	Version: 1.0.0
		-	Description: Responsive theme for BU School of Education
		-	Template: responsive-framework

3. Update theme metadata (see the checklist below)
4. Install development dependencies
5. Run `grunt build` to compile your Sass and Javascript files before your initial commit

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

- [ ] Is your `package.json` filled out accurately (`name`, `version`, `description`, `contributors`, `repository`)?
- [ ] Is your `css-dev/style.scss` filled out accurately (`Description`, `Version`)?
- [ ] Does your theme have a README.md file that summarizes what site it is for and what functionality it adds?
- [ ] Does your theme have a `screenshot.png` that will help identify it under Appearance > Themes?
- [ ] Did you run `grunt build` to compile your Sass and Javascript files?
- [ ] Make sure you're pulling in the newest version of Foundation. Use the [newest release] (https://github.com/bu-ist/responsive-foundation/releases).

## Force CSS/JS to refresh

You can force your CSS and Javascript to refresh in your theme by updating your theme version. When you update your theme version, the framework uses a process called cache busting to make sure browsers know there is a new version of the CSS and Javascript available.

You'll need to update the theme version in two places: `functions.php` and `package.json`.

### Update the version number

In [`package.json`](https://github.com/bu-ist/responsive-child-starter/blob/master/package.json#L3), increment the version number appropriately. For this example, we'll assume we're making a minor update from the first big release of the theme. That means we'll be going from `1.0.0` to `1.0.1`. (You can learn more about version number guidelines [here](http://semver.org/)).

```json
"version": "1.0.1",
```

### Regenerate assets

We'll need to run the `grunt version` command after updating these files so that the new version number is applied to the CSS, Javascript, and your functions.php file. This is what will tell browsers that there is a new version available for download.

1. Run the `grunt version` command
2. Regenerate your static assets (`grunt build`)

This will make sure the version change propogates to `functions.php` and `css-dev/style.scss`.

### Commit and push

Last step: commit and push your changes! When you're ready to release it to the world, request a deploy.
