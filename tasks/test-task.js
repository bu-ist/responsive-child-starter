import gulp from 'gulp';
const { series } = require('gulp');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  console.log("hello world");
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function buildFiles(cb) {
  // body omitted
  cb();
}


const build = gulp.series(clean, buildFiles);

export default build;
