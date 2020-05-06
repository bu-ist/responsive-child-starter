const { parallel } = require( 'gulp' );
const { sass } = require( 'tasks/sass' );
const { postcss } = require( 'tasks/postcss' );

// exports.build = series(clean, parallel(css, javascript));
exports.build = series(sass, postcss);