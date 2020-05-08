'use strict';

const { series, parallel, src, dest } = require( 'gulp' ),
		replace = require('gulp-replace'),
		fs = require('fs'),
		project = JSON.parse(fs.readFileSync('./package.json')),
		{ build } = require( './build' );

/****
	Versioning
***/

function versionSass() {
	const sassVersion = new RegExp(`Version: \\d+(?:\\.\\d+)+`);

	return src([
		'css-dev/style.scss'
	])
	.pipe(replace( sassVersion, `Version: ${project.version}` ))
	.pipe(dest('css-dev/'));
}

function versionPHP() {
	const phpVersion = new RegExp(`'RESPONSIVE_CHILD_THEME_VERSION', '\\d+(?:\\.\\d+)+'`);

	return src([
		'functions.php'
	])
	.pipe(replace( phpVersion, `'RESPONSIVE_CHILD_THEME_VERSION', '${project.version}'` ))
	.pipe(dest('./'));
}

exports.version = series( parallel( versionSass, versionPHP ), build );