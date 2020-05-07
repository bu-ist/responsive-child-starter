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
		package = JSON.parse(fs.readFileSync('./package.json'));

function addtextdomain() {

// I don't actually know how to do this.
// Options from the old Gruntfile are here for reference.
// We could use the package info above for the textdomain.
// My best lead on a replacement is here:
// https://github.com/Automattic/wp-calypso/tree/master/packages/i18n-calypso
// From https://github.com/Automattic/jetpack/pull/5526
// But I don't understand how to use it.
// Help please :)

//	options: {
//		textdomain: 'responsive-child-starter',
//	},
//	update_all_domains: {
//		options: {
//			updateDomains: true,
//		},
//		src: [
//			'*.php',
//			'**/*.php',
//			'!.git/**/*',
//			'!bin/**/*',
//			'!node_modules/**/*',
//			'!tests/**/*',
//			'!vendor/**/*',
//		],
//	},
//	target: {
//		files: {
//			src: [
//				'**.php',
//				'**/*.php',
//				'!node_modules/**',
//				'!node_modules/**',
//				'!bin/**',
//				'!vendor/**',
//			],
//		},
//	},

	return;
}

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
		package: `Boston University Interactive Design ${package.name} WordPress Theme`
	}))
	.pipe(dest(`languages/${package.name}.pot`));
}

exports.translation = generatePotfile;