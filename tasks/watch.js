/**
 * Gulp watch tasks.
 *
 * Watches CSS and JS for changes, then compiles.
 *
 * @package Responsive_Child_Starter
 */

const { watch, parallel } = require('gulp'),
		{ sass } = require( './sass' ),
		{ postcss } = require( './postcss' ),
		{ javascript } = require( './javascript' );

exports.watch = function() {
	watch( 'css-dev/**/*.scss', { events: 'all' }, series( sass, postcss ) );
	watch( 'js-dev/**/*.js', { events: 'all' }, javascript );
};
