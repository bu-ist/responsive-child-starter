/**
 * Gulp task for cleaning all compiled files.
 *
 * Deletes compiled CSS, JS, and POTfile.
 *
 * Based on the official Gulp recipe here:
 *	https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
 *
 * @package Responsive_Child_Starter
 */

'use strict';

const del = require( 'del' );

function clean() {
	return del([
		'./js/**/*',
		'./languages/**/*',
		'./*.css',
		'./*.map',
	]);
}

exports.clean = clean;