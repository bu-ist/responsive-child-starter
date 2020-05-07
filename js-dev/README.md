# JavaScript in Responsive

You can now use ES6 in Responsive!

This means that you can write JavaScript in the same ways you're
used to writing Sass. The big difference here is that instead of
using partials, JavaScript calls these smaller chunks of code
**modules**.

## How it works

### Only edit code in `js-dev`

This is the release that finally gets it right. Never again will
you touch the `js` folder. **All your working code goes in `js-dev`,
and all that code gets compiled and minified straight to the `js`
folder, just like you would expect.** No more guessing what goes
where - if you want it minified automatically, stick it in `js-dev`.

### Use modules, if you want

See the `script.js` file in this folder for an example of importing
a module, and `modules/example-module.js` for an example of a basic
module structure to get you started.

If you don't want to use modules, you can ignore it and write your
JavaScript just like you normally do, straight in script.js.

### A home for vendor scripts

It's easy to know where to stash your vendor scripts now. Keep them
all organized in the easy to use `vendor` folder. All scripts in this
folder get minified and sent to the `js` folder automatically.

### A home for template-specific scripts

Do you have scripts that really only apply to one template, such as
a directory filtering script? You can now keep those in the `templates`
folder in `js-dev`. All scripts in this folder also automatically
get minified and compiled to the `js` folder.

## The technical stuff

This work is based off of the original fantastic work of Todd Milliken,
who pioneered es6 (that's new JavaScript!) support in Responsive. See
https://github.com/bu-ist/responsive-foundation/pull/191 for the history
of how this was originally implemented.

With our move to Gulp, we now use the following tools to make this possible.

- `gulp` manages our tasks.
- `broswerify` allows you to use modules by "bundling" up your imported
scripts so they are all in the right place.
- `babelify` is responsible for _translating_ the new es6 syntax into
code that can be safely run in browsers that don't support it (much like
Douglas Adam's babelfish!).
- `gulp-uglify` is responsible for making your code "ugly" - a.k.a
minifying it.
- `vinyl-source-stream` and `vinyl-buffer` allow gulp and broswerify
to talk to each other easily. These were added based on the [official
recipe for implementing Browserify and Uglify](https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md) from the Gulp team.
- `gulp-sourcemaps` allows us to create the proper source maps, just like
we use in Sass.
- `gulp-rename` allows us to add a `.min` to the minified JavaScript
filenames.
