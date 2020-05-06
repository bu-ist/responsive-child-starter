const { sass } = require( './tasks/sass' );
const { postcss } = require( './tasks/postcss' );
const { build } = require( './tasks/build' );
const { watch } = require( './tasks/watch' );

exports.sass = sass;
exports.postcss = postcss;
exports.build = build;
exports.watch = watch;
exports.default = watch;