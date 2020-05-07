# Tasks in Responsive

We now use Gulp for task management. Here is a broad overview of
how those tasks are managed, and what their dependencies are.

## Scripts and dependencies

- `gulp` manages our tasks.

### `javascript.js`

This work is based off of the original fantastic work of Todd Milliken,
who pioneered es6 (that's new JavaScript!) support in Responsive. See
https://github.com/bu-ist/responsive-foundation/pull/191 for the history
of how this was originally implemented.

The following packages assist in JavaScript compilation.

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
