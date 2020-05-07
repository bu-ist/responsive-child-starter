const { clean } = require( './tasks/clean' ),
		{ sass } = require( './tasks/sass' ),
		{ postcss } = require( './tasks/postcss' ),
		{ javascript } = require( './tasks/javascript' ),
		{ translation } = require( './tasks/i18n' ),
		{ build } = require( './tasks/build' ),
		{ watch } = require( './tasks/watch' );

exports.clean = clean;
exports.sass = sass;
exports.postcss = postcss;
exports.javascript = javascript;
exports.translation = translation;
exports.build = build;
exports.watch = watch;
exports.default = watch;