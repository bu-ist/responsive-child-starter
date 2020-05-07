const { watch, parallel } = require('gulp');
const { build } = require( './build' );
const { javascript } = require( './javascript' );

// exports.build = series(clean, parallel(css, javascript));
exports.watch = function() {
	watch( 'css-dev/**/*.scss', { events: 'all' }, build );
	watch( 'js-dev/**/*.js', { events: 'all' }, javascript );
};