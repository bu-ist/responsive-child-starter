const { build } = require( './tasks/build' );

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.build = build;
exports.default = defaultTask;