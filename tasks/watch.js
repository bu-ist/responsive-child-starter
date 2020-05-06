const { watch, parallel } = require('gulp');
const { build } = require( './build' );

// exports.build = series(clean, parallel(css, javascript));
exports.watch = function() {
	watch('css-dev/**/*.scss', { events: 'all' }, build);
};