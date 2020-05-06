'use strict';

const { src, dest } = require( 'gulp' );
const sourcemaps = require( 'gulp-sourcemaps' );
const sass = require( 'gulp-sass' );

sass.compiler = require( 'node-sass' );

const options = {
	outputStyle: 'expanded',
	indentType: 'space',
	indentWidth: 2,
	precision: '5',
	includePaths: [
		'node_modules/normalize-scss/sass',
		'node_modules/mathsass/dist/',
		'node_modules/responsive-foundation/css-dev',
	],
}

function compile() {
 	return src('./css-dev/**/*.scss')
 	.pipe(sourcemaps.init())
   .pipe(sass(options).on('error', sass.logError))
   .pipe(sourcemaps.write('./'))
   .pipe(dest('./'));
}

// exports.build = series(clean, parallel(css, javascript));
exports.sass = compile;