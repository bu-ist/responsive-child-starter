const { parallel, series } = require( 'gulp' ),
		{ sass } = require( './sass' ),
		{ postcss } = require( './postcss' ),
		{ javascript } = require( './javascript' ),
		{ translation } = require( './i18n' );

exports.build = parallel( javascript, translation, series( sass, postcss ) );