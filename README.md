# [Project Name]

**CREATIVE DIRECTOR:** Please provide a brief description here, then fill out links below
and set up a new [Github Project](https://github.com/bu-ist/responsive-child-starter/wiki/Setting-up-Github-Projects).

A starter template for child themes of Responsive Framework 2. For Responsive Framework 3, please see https://github.com/bu-ist/responsive-child-starter-3x/.

## Quick Start
Before you begin, make sure [Node / Node Package Manager](http://nodejs.org/)
are installed and the following dependencies are installed globally. See [[Supported Technologies]] for more in-depth information on dependencies.

- [Set up a new custom theme](https://github.com/bu-ist/responsive-child-starter/wiki/Set-up-a-new-custom-theme)
- Install your [development dependencies](https://github.com/bu-ist/responsive-child-starter/wiki/Install-development-dependencies)
- Run  `npm install`, then `grunt` to begin watching changes.
- Upload to [your sandbox](http://sites.bu.edu/marcom-team/departments/interactive-design/interactive-design-workflow/development/sandboxes-overview/) to see changes.

## Contributing to the codebase
- [Git-Flow](https://www.git-tower.com/help/guides/integration/git-flow/mac) will be the workflow.

---

### Common commands this theme supports

- `npm install`: Install your development dependencies
- `grunt`: Watch your theme for changes and compile when a change is detected.
- `grunt build`: Manually build all theme assets.
- `grunt version`: [Force CSS and JavaScript to refresh when you deploy changes](https://github.com/bu-ist/responsive-child-starter/wiki/Versioning).

### Pull Requests:
- Pull requests should stay in `draft` status until they are actually ready for review.
- [todo] Decide how to handle `code review` vs `functionality review`.

### Github Project Organization
- This project uses [PLEASE CHOOSE: GITHUB PROJECTS OR GITHUB PROJECTS BETA]. See the project here: [PROJECT LINK HERE]
- Boards you'll find:
  - [PLEASE LIST IMPORTANT BOARDS]

### Issue Tags & Columns, Assignees, etc:
- [ADD RELEVANT INFORMATION SPECIFIC TO YOUR WORKFLOW HERE]

### Branch structure:
- `main` & `develop` will be used, but _never_ directly committed to.
- All changes should be in branches based off of `develop` and include the **issue #** when there is one. Examples:
  - branches/18-repo-setup
  - branches/29-foundational-styles
  - branches/feature/53-glossary
  - branches/hotfix/99-branding-explosion
- Frontend vs Backend branches. Only when complex & necessary should we make seperate branches created for the **same feature/issue**.

---

## Setting up a Documentation site

It is best to create the documentation site right out of the gate. This way documentation of features can happen through out the project instead of piling up at the end.
- Clone http://wpdocs.bu.edu/ to http://wpdocs.bu.edu/yoursitename
- Apply your theme 
- Edit/cut anything existing that doesn’t apply to your custom theme
- Add new pages for custom functionality as needed.
Check out [Dining Documentation](http://wpdocs.bu.edu/dining/) for an awesome example!

## Project links

- **Webteam:** [LINK HERE]()
- **ID Presents:** [LINK HERE]()
- **Staging/Live:** [LINK HERE]()
- **ActiveCollab:** [LINK HERE]()
- **Smartsheet:** [LINK HERE]()
- **Github Issues:** [LINK HERE]()
- **Github Projects:** [LINK HERE]()

## Information for collaborators
- [Getting Ready to Work with Boston University's WordPress Team](https://docs.google.com/document/d/1rKIYzcFiFiZaD6_Im-vbXMlfAuJ8C9GMSj1j91CtyI4/edit?usp=sharing)

--- 

## Supported Technologies 
Please update this if you have a newer version of Node and can verify the theme compiles with it.

### Package Management
| Name | Version | Purpose |
|---|---|---|
| node.js | 12.19.0 LTS | Support for npm |
| npm | X | Package management. See package.json for a full list of packages. |

### Linting and Browser Support Tools
| Name | Version | Purpose |
|---|---|---|
| [@babel/core](https://babeljs.io/docs/en/babel-core) | See package.json | Allows you to use newer JavaScript (ES6) syntax, such as import and arrow functions. |
| [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) | See package.json | Allows you to tell Babel which browsers to provide compatibility for. Settings are set according to [our browser support standards](https://www.bu.edu/tech/services/cccs/websites/www/wordpress/design-options/custom/browser-support-for-custom-bu-wordpress-themes/). |
| [@wordpress/babel-preset-default](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-babel-preset-default/) | See package.json | Default Babel preset for WordPress development. |
| [@wordpress/eslint-plugin](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-eslint-plugin/) | See package.json | JavaScript linting, configurations and custom rules for WordPress development. |
| [autoprefixer](https://github.com/postcss/autoprefixer) | See package.json | Adds browser prefixes to CSS. Used with PostCSS. |
| [babelify](https://github.com/babel/babelify) | See package.json | Sends anything going through Browserify on to Babel. |
| [browserify-shim](https://github.com/thlorenz/browserify-shim) | See package.json | Allows jQuery and other non-Common JS libraries to go through Browserify. |
| [eslint](https://eslint.org/) | See package.json | Lints JavaScript, checks against coding standards and finds errors. |

### Task Management and Compilation Tools
| Name | Version | Purpose |
|---|---|---|
| [grunt](https://gruntjs.com/) | See package.json | Compiles the theme SCSS and runs commands like linting. We plan to replace this in the future. |
| [grunt-browserify](https://www.npmjs.com/package/grunt-browserify) | See package.json | Lets you require modules. In this theme, it handles the jQuery dependency. |
| [grunt-contrib-clean](https://www.npmjs.com/package/grunt-contrib-clean) | See package.json | Small utility to clean out files and folders as part of compiling. |
| [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat) | See package.json | Combines separate JavaScript files into one as part of compiling. |
| [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) | See package.json | Copies files and folders as part of compiling. |
| [grunt-contrib-uglify](https://www.npmjs.com/package/grunt-contrib-uglify) | See package.json | Minifies files as part of compiling. |
| [grunt-postcss](https://www.npmjs.com/package/grunt-postcss) | See package.json | Adds CSS browser prefixes as part of compiling. |
| [grunt-sass](https://www.npmjs.com/package/grunt-sass) | See package.json | Settings to compile SCSS files as part of compiling process. |
| [grunt-version](https://www.npmjs.com/package/grunt-version) | See package.json | Looks for a version number in package.json and copies it to other files during the compiling process. |
| [grunt-wp-i18n](https://www.npmjs.com/package/grunt-wp-i18n) | See package.json | Sets internationalization theme domain text throughout the theme as part of compiling. |
| [node-sass](https://www.npmjs.com/package/node-sass) | See package.json | Compiles the SCSS according to grunt settings as part of compiling. We currently use the LibSass setting behind the scenes as compiling engine. Dart Sass is possible to use, but is much slower. |
