/**
 * Gulp task for compiling JavaScript using es6 syntax.
 *
 * Packages modules together using Browserify, then
 * translates to cross-browser compatible JS using Babel.
 *
 * Vinyl modules are required to allow these to talk to
 * Gulp directly.
 *
 * Based on the official Gulp recipe here:
 *	https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md
 *
 * @package Responsive_Child_Starter
 */

'use strict';

const { parallel, src, dest } = require( 'gulp' ),
		log = require('gulplog'),
		uglify = require( 'gulp-uglify' ),
		babelify = require( 'babelify' ),
		browserify = require( 'browserify' ),
		source = require('vinyl-source-stream'),
		buffer = require('vinyl-buffer'),
		sourcemaps = require('gulp-sourcemaps'),
		rename = require('gulp-rename');

const paths = {
	scripts: {
		src: './js-dev/script.js',
		dest: "./js",
		filename: "script.min.js"
	},
	allothers: {
		src: [
			'./js-dev/vendor/*.js',
			'./js-dev/templates/*.js'
		],
		dest: "./js"
	}
};

function compileScripts() {
	const bundler = browserify({
		entries: [
			paths.scripts.src
		],
		debug: true
	}).transform(babelify);

	return bundler.bundle()
		.pipe(source(paths.scripts.filename))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(uglify())
		.on('error', log.error)
		.pipe(sourcemaps.write('./'))
		.pipe(dest(paths.scripts.dest));
}

function minify() {
	return src(paths.allothers.src)
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(uglify())
		.on('error', log.error)
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('./'))
		.pipe(dest(paths.scripts.dest));
}

exports.javascript = parallel( compileScripts, minify );