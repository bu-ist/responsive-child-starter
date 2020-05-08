/**
 * Gulp task for code linting.
 *
 * Currently supports SCSS using Stylelint.
 *
 * @package Responsive_Child_Starter
 */

'use strict';

const { src, dest } = require('gulp'),
		gulpStylelint = require('gulp-stylelint'),
		log = require('gulplog');

const error = function() {
	log.warn('Stylelint found some errors in your SCSS.');
	log.info('Fix them automatically by running:');
	log.info('npm run fix');
}

function stylelint() {
	return
	src('css-dev/**/*.scss')
	.pipe(gulpStylelint({
		failAfterError: true,
		reporters: [
			{
				formatter: 'string',
				console: true
			}
		]
	}))
	.on( 'error', error );
}

exports.lint = stylelint;
