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

/****
	Based on the official Gulp recipe here:
	https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md
***/


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
		// Add transformation tasks to the pipeline here.
		.pipe(uglify())
		.on('error', log.error)
		.pipe(sourcemaps.write('./'))
		.pipe(dest(paths.scripts.dest));
}

function minify() {
	return src(paths.allothers.src)
		.pipe(sourcemaps.init({loadMaps: true}))
		// Add transformation tasks to the pipeline here.
		.pipe(uglify())
		.on('error', log.error)
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('./'))
		.pipe(dest(paths.scripts.dest));
}

exports.javascript = parallel( compileScripts, minify );