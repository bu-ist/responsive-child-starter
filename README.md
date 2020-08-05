# Responsive Child Starter

A starter template for child themes of the Responsive Framework.

**Please note:** You may not use this template without explicit permission of Boston University's Interactive Design team.

## How to Use This Repository

1. Download (don't clone!) the master branch of this repository to your `wp-content/themes`
 directory.
1. If you haven't already, make sure you request a Repository on Github from a developer. They can set one up, while you set up your theme.
1. Replace all references to "responsive-child-starter" / "Responsive Child
 Starter" with your theme name.
    - package.json
    - functions.php
    - css-dev/style.scss
      - Theme Name: Responsive Child Starter (R)
      - Author: Boston University Interactive Design
      - Website: [http://www.bu.edu/interactive-design/](http://www.bu.edu/interactive-design/)
      - Version: 1.0.0
      - Description: Responsive theme for BU School of Education
      - Template: responsive-framework-2x

1. Update theme metadata (see the checklist below).
1. Install development dependencies.
1. Run `grunt build` to compile your Sass and Javascript files before your
 initial commit.

Before your initial commit you should also replace this README.md with your own
-- be sure to include what site the theme is for and summarize any additional
functionality that your theme provides.

## Theme Meta Data Checklist

- [ ] Is your `package.json` filled out accurately (`name`, `version`,
 `description`, `contributors`, `repository`)?
- [ ] Is your `css-dev/style.scss` filled out accurately (`Description`,
 `Version`)?
- [ ] Update `potFilename` from `responsive-child-starter.pot` to `theme-name.pot` in `Gruntfile.js`.
- [ ] Update `textdomain:` from `responsive-child-starter` to `theme-name` in `Gruntfile.js`.
- [ ] Does your theme have a README.md file that summarizes what site it is
 for and what functionality it adds?
- [ ] Does your theme have a `screenshot.png` that will help identify it under
 Appearance > Themes?
- [ ] Did you run `grunt build` to compile your Sass and Javascript files?
- [ ] Make sure you're pulling in the newest version of Foundation. Use the
 [newest release](https://github.com/bu-ist/responsive-foundation/releases).

## Setting up Documentation site

It is best to create the documentation site right out of the gate. This way documentation of features can happen through out the project instead of piling up at the end.
- Clone http://wpdocs.bu.edu/ to http://wpdocs.bu.edu/yoursitename
- Apply your theme 
- Edit/cut anything existing that doesn’t apply to your custom theme
- Add new pages for custom functionality as needed.
Check out [Dining Documentation](http://wpdocs.bu.edu/dining/) for an awesome example!


## Installing Development Dependencies

Before you begin, make sure [Node / Node Package Manager](http://nodejs.org/)
are installed and the following dependencies are installed globally.

### Fire up Terminal!

This step only needs to be done **One Time**, regardless of how many new child-themes you create.

```bash
npm install -g grunt-cli
```

This next step should be done **Everytime You Create a New Theme**.

1. Change your theme directory by typing `cd ` then adding a space after the letter 'd'.

1. Drag the Theme's folder from a Finder Window into Terminal and click the "Return" key.

It should look something like this:  `"theme-name" username$ `

Run the following commands.

```bash
bower install
npm install
```

This will install all of your local development dependencies. Again, these commands
only need to be run **once per theme**.

## Force CSS/JS to refresh

You can force your CSS and Javascript to refresh in your theme by updating your
theme version. When you update your theme version, the framework uses a process
called cache busting to make sure browsers know there is a new version of the
CSS and Javascript available.

You'll need to update the theme version in two places: `functions.php` and `package.json`.

### Update the version number

In [`package.json`](https://github.com/bu-ist/responsive-child-starter/blob/master/package.json#L3),
increment the version number appropriately. For this example, we'll assume
we're making a minor update from the first big release of the theme. That means
we'll be going from `1.0.0` to `1.0.1`. (You can learn more about version
number guidelines [here](http://semver.org/)).

```json
"version": "1.0.1",
```

### Regenerate assets

We'll need to run the `grunt version` command after updating these files so
that the new version number is applied to the CSS, Javascript, and your
`functions.php` file. This is what will tell browsers that there is a new
version available for download.

1. Run the `grunt version` command
1. Regenerate your static assets (`grunt build`)

This will make sure the version change propogates to `functions.php` and `css-dev/style.scss`.

## Adding Theme to Repository
If you've requested to have a new repository created, check with the developer so you know what to look for in Github/Tower.

1. Using Tower find and clone your new repository to your `wp-content/themes` directory (Same place as the responsive-child-starter theme). It should only contain a single ".git" folder.

1. Move all of your new theme files (responsive-child-starter) into the folder you've clone down from the new respository (r-example). Assuming you downloaded the inital responsive-child-starter theme and did not clone it, all should go well. If you did clone it accidently, you'll want to move all the files except, ".distignore" and ".git" to the new respository folder.

### Commit and push

Tower will now recognize the additional files added to the folder. "Working Copy" should have a number next to it (roughly 20-70). When your ready to commit, click "Stage All" and type "Initial Commit" for your Commit Subject and click Commit.

Last step: Push your changes! When you're ready to release it to the world, request a deploy.


## Adding Theme to NM/Sandbox via FTP
When completed move your local files over to FTP **Except** the following folders:

```bash
bower_components
node_modules
```

These folders contain alot of files that aren't needed remotely and will slow down the process of getting your new theme on the server. Once uploaded, you should now be able to access the theme in wordpress on your dashboard under Appearances---> Themes.

Last step: commit and push your changes! When you're ready to release it to the
world, request a deploy.

### Using PHP-DEV templates

This starter theme has been setup with a section for every action hook, and an
add_action to activate every action hook in responsive-framework.
The intent is to provide a quick and easy way for designers to add HTML and CSS
code as it will appear on the eventual live site.

These templates are meant for use for rapid HTML and CSS development only. Any
code added to these templates must be moved to production ready templates by a
developer prior to launch.

The following must be deleted before going live:

* In the theme `functions.php` file
  * require_once 'php-dev/dev-functions.php';
  * add_filter( 'after_setup_theme', 'dev_sections' );
* The entire `php-dev` folder.

To add HTML to a specific hook find the corresponding hook name in the $hooks
array and change it's value to `true`. Add HTML sample code to the corresponding
file in the `php-dev` folder.

Note: The hooks use `_` underscores and the filenames use `-`, and are otherwise
identical.

Note: To see all current hooks visit
[Responsive Framework](https://github.com/bu-ist/responsive-framework)
