/**
 * Gulp task for compressing and autoprefixing CSS.
 *
 * Prepares CSS for production use.
 *
 * @package Responsive_Child_Starter
 */

'use strict';

const { src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

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

exports.postcss = compress;
