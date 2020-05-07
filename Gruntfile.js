module.exports = function( grunt ) {
	// Require external packages.
	const autoprefixer = require( 'autoprefixer' );
	const sass = require( 'node-sass' );

	// 1. All configuration goes here
	grunt.initConfig( {
		// 2. All functions go here.
		version: {
			functions: {
				options: {
					prefix: "['\"]RESPONSIVE_\\w*_VERSION['\"],\\s*'",
				},
				src: [ 'functions.php' ],
			},
			styles: {
				options: {
					prefix: 'Version:\\s*',
				},
				src: [ 'css-dev/style.scss' ],
			},
		},
		clean: {
			languages: [ 'languages/*' ],
			js: [ 'js/**/*.js', 'js/**/*.map' ],
		},
	} );

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks( 'grunt-browserify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-postcss' );
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-notify' );
	grunt.loadNpmTasks( 'grunt-version' );
	grunt.loadNpmTasks( 'grunt-wp-i18n' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask( 'install', [ 'copy:hooks', 'build' ] );
	grunt.registerTask( 'i18n', [ 'clean:languages', 'addtextdomain', 'makepot' ] );
	grunt.registerTask( 'styles', [ 'version:styles', 'sass', 'postcss' ] );
	grunt.registerTask( 'scripts', [
		'version:functions',
		'clean:js',
		'browserify',
		'uglify',
	] );
	grunt.registerTask( 'build', [ 'styles', 'scripts', 'i18n' ] );
	grunt.registerTask( 'default', [ 'watch' ] );
};
