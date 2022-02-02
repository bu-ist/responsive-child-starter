# [Project Name]

---
## Setup instructions (delete after repository setup is complete)

- [ ] **DEVELOPER:** Please set up CodeClimate and branch protections.
- [ ] **DEVELOPER:** Please review [supported technologies](#supported-technologies) and see if any immediate changes are needed for your project. Apply security updates on first install using `npm run fix`, if any, and ensure the theme still compiles by running `grunt build`.
- [ ] **CREATIVE DIRECTOR:** Please [import our standard label set](https://github.com/bu-ist/responsive-child-starter/wiki/Import-Labels).
- [ ] **CREATIVE DIRECTOR:** Please provide a brief description of the purpose of the theme in the next section, then fill out the [project information](#project-information) section.
and set up a new [Github Project](https://github.com/bu-ist/responsive-child-starter/wiki/Set-up-Github-Projects).
- [ ] **CREATIVE DIRECTOR:** Please set up a documentation site.
	- Clone http://wpdocs.bu.edu/ to http://wpdocs.bu.edu/yoursitename.
- [ ] **CREATIVE DIRECTOR:** Please review [project information](#project-information) and see if any immediate changes are needed for your project.
- [ ] **DEVELOPER:** Please review [development workflow](#development-workflow) and see if any immediate changes are needed for your project.
- [ ] **ENTIRE TEAM:** Please review [project information](#project-information) together and approve.
- [ ] **ENTIRE TEAM:** Please review [development workflow](#development-workflow) together and approve.

You're ready for work! Go ahead and delete this section when all boxes are checked.

---

A starter template for child themes of Responsive Framework 2. For Responsive Framework 3, please see https://github.com/bu-ist/responsive-child-starter-3x/.

**Contents:**
- [Quick start](#quick-start)
- [Project information](#project-information)
- [Development workflow](#development-workflow)
- [Supported technologies](#supported-technologies)
- [Troubleshooting](#troubleshooting)

---

## Quick start

- [Set up a new custom theme](https://github.com/bu-ist/responsive-child-starter/wiki/Set-up-a-new-custom-theme)
- Install your [development dependencies](https://github.com/bu-ist/responsive-child-starter/wiki/Install-development-dependencies)
- Run  `npm install`, then `grunt` to begin watching changes.
- Upload to [your sandbox](http://sites.bu.edu/marcom-team/departments/interactive-design/interactive-design-workflow/development/sandboxes-overview/) to see changes.

### Common commands this theme supports

- `npm install`: Install your development dependencies
- `grunt`: Watch your theme for changes and compile when a change is detected.
- `grunt build`: Manually build all theme assets.
- `grunt version`: [Force CSS and JavaScript to refresh when you deploy changes](https://github.com/bu-ist/responsive-child-starter/wiki/Versioning).

---

## Project information

### Important links

- **Webteam:** [LINK HERE]()
- **ID Presents:** [LINK HERE]()
- **Staging/Live:** [LINK HERE]()
- **ActiveCollab:** [LINK HERE]()
- **Smartsheet:** [LINK HERE]()
- **Github Issues:** [LINK HERE]()
- **Github Projects:** [LINK HERE]()

**Information for collaborators**
- [Getting Ready to Work with Boston University's WordPress Team](https://docs.google.com/document/d/1rKIYzcFiFiZaD6_Im-vbXMlfAuJ8C9GMSj1j91CtyI4/edit?usp=sharing)

### Github Project Organization
- This project uses [PLEASE CHOOSE: GITHUB PROJECTS OR GITHUB PROJECTS BETA]. See the project here: [PROJECT LINK HERE]
- Boards you'll find:
  - [PLEASE LIST IMPORTANT BOARDS]

### Issue Tags & Columns, Assignees, etc:
- [ADD RELEVANT INFORMATION SPECIFIC TO YOUR WORKFLOW HERE]

---

## Development workflow
- [Git-Flow](https://www.git-tower.com/help/guides/integration/git-flow/mac) will be the workflow.

### Pull requests
- Pull requests should stay in `draft` status until they are actually ready for review.
- [todo] Decide how to handle `code review` vs `functionality review`.

### Branch structure
- `main` & `develop` will be used, but _never_ directly committed to.
- All changes should be in branches based off of `develop` and include the **issue #** when there is one. Examples:
  - branches/18-repo-setup
  - branches/29-foundational-styles
  - branches/feature/53-glossary
  - branches/hotfix/99-branding-explosion
- Frontend vs Backend branches. Only when complex & necessary should we make seperate branches created for the **same feature/issue**.

### Code review and CodeClimate
- Code reviews are required to merge.
- CodeClimate is not required to merge. However, you should make your best effort to fix CodeClimate errors within reason.

### Environments
- All active development will happen in team member sandboxes.
- All code ready for review will be uploaded to the shared `id-presents` sandbox before review with the client.
- All code that is merged to `develop` is ready to deploy to staging at any time.
- All code that is released to staging will be done via release numbers.

--- 

## Supported Technologies 
Please update this if you have a newer version of Node and can verify the theme compiles with it.

### Package Management
| Name | Version | Purpose |
|---|---|---|
| node.js | 12.19.0 LTS | Support for npm |
| npm | X | Package management. See package.json for a full list of packages. |

### Frontend Dependencies
| Name | Version | Purpose |
|---|---|---|
| Responsive Foundation (Required) | X | Basic styles and utilities for all Boston University themes |
| BU PrePress (Optional, delete if irrelevant to this project) | X | Editorial tools for Boston University schools and colleges which produce magazines or other news publications. |
| BU Blocks (Optional, delete if irrelevant to this project) | X | Custom Gutenberg blocks for Boston University websites. Required by BU PrePress. |

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

--- 

## Troubleshooting
### Compiling errors
You'll see these types of errors in the terminal, and this should be your first stop if anything isn't working as expected, including styles not showing up. Try running the following if your theme is not compiling successfully when you run `grunt build`.
1. Delete `package-lock.json`, then run `npm install`, even if you have already run it before.
2. Run `node -v` and `npm -v` to see your current node and npm versions. Do they match the versions in the [supported technologies list](#supported-technologies)? If not, use nvm to change the version by running `nvm use [VERSION NUMBER]`, where `[VERSION NUMBER]` is replaced with the version from the list above.
3. Run `npm rebuild node-sass --force`, then rerun `npm install`. This one is helpful if you see a Node Sass OSX bindings error, or just switched npm/node versions for this theme.
