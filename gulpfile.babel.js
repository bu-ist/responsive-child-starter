const { sass } = require( './tasks/sass' );
const { postcss } = require( './tasks/postcss' );
const { javascript } = require( './tasks/javascript' );
const { build } = require( './tasks/build' );
const { watch } = require( './tasks/watch' );

exports.sass = sass;
exports.postcss = postcss;
exports.javascript = javascript;
exports.build = build;
exports.watch = watch;
exports.default = watch;