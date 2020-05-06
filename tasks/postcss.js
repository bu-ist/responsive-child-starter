'use strict';

const { series, src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

//const { parallel } = require( 'gulp' );

const plugins = [
	autoprefixer(),
	cssnano()
];

function compress() {
	return src([
		'./*.css',
		'!./*.min.css'
	])
	.pipe(sourcemaps.init())
	.pipe(postcss(plugins))
	.pipe(rename(function (path) {
		return {
			dirname: path.dirname,
			basename: path.basename + ".min",
			extname: path.extname
		};
	}))
	.pipe(sourcemaps.write('.'))
	.pipe(dest('./'));
}

// exports.build = series(clean, parallel(css, javascript));
exports.postcss = compress;