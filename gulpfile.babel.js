const { sass } = require( './tasks/sass' );
const { postcss } = require( './tasks/postcss' );
const { build } = require( './tasks/build' );

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.sass = sass;
exports.postcss = postcss;
exports.default = defaultTask;