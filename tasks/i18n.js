'use strict';

/**
 * Tasks for Internationalization (i18n) and Localization (l10n)
 * in WordPress.
 *
 * Generates the POT file in the languages folder.
 *
 * @package Responsive_Child_Starter
 */

const { src, dest } = require( 'gulp' ),
		wpPot = require('gulp-wp-pot'),
		fs = require('fs'),
		json = JSON.parse(fs.readFileSync('./package.json'));

function generatePotfile() {
	return src([
		'*.php',
		'**/*.php',
		'!.git/**/*',
		'!bin/**/*',
		'!node_modules/**/*',
		'!tests/**/*',
		'!vendor/**/*',
	])
	.pipe(wpPot( {
		package: `Boston University Interactive Design ${json.name} WordPress Theme`
	}))
	.pipe(dest(`languages/${json.name}.pot`));
}

exports.translation = generatePotfile;