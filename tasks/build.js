const { parallel, series } = require( 'gulp' ),
		{ clean } = require( './clean' ),
		{ sass } = require( './sass' ),
		{ postcss } = require( './postcss' ),
		{ javascript } = require( './javascript' ),
		{ translation } = require( './i18n' );

exports.build = series( clean,
	parallel( javascript, translation, series( sass, postcss ) )
);