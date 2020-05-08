/**
 * Gulp tasks.
 *
 * This file is responsible for defining all Gulp
 * tasks this theme supports.
 *
 * You may run anything under "module.exports" by
 * running `gulp {name-of-export}`. For example:
 *
 * gulp clean
 *
 * All tasks are managed in the tasks folder.
 * Please do not write tasks in this file directly.
 *
 * @package Responsive_Child_Starter
 */

const { clean } = require( './tasks/clean' ),
		{ sass } = require( './tasks/sass' ),
		{ postcss } = require( './tasks/postcss' ),
		{ lint } = require( './tasks/lint' ),
		{ javascript } = require( './tasks/javascript' ),
		{ translation } = require( './tasks/i18n' ),
		{ build } = require( './tasks/build' ),
		{ version } = require( './tasks/version' ),
		{ watch } = require( './tasks/watch' );

exports.clean = clean;
exports.sass = sass;
exports.postcss = postcss;
exports.lint = lint;
exports.javascript = javascript;
exports.translation = translation;
exports.build = build;
exports.version = version;
exports.watch = watch;
exports.default = watch;
