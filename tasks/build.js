const { series } = require( 'gulp' );
const { sass } = require( './sass' );
const { postcss } = require( './postcss' );

// exports.build = series(clean, parallel(css, javascript));
exports.build = series(sass, postcss);