/**
 * Gulp task for building all theme assets.
 *
 * Cleans all compiled files, then builds
 * JavaScript, translation files, and Sass.
 *
 * @package Responsive_Child_Starter
 */

'use strict';

const { parallel, series } = require( 'gulp' ),
		{ clean } = require( './clean' ),
		{ sass } = require( './sass' ),
		{ postcss } = require( './postcss' ),
		{ javascript } = require( './javascript' ),
		{ translation } = require( './i18n' );

exports.build = series( clean,
	parallel( javascript, translation, series( sass, postcss ) )
);