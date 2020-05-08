'use strict';

const del = require('del');

/****
	Based on the official Gulp recipe here:
	https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
***/

function clean() {
	return del([
		'./js/**/*',
		'./languages/**/*',
		'./*.css',
		'./*.map',
	]);
}

exports.clean = clean;