module.exports = function(grunt) {

	// 1. All configuration goes here
	grunt.initConfig({

		// 2. All functions go here.
		watch: {
			grunt: {
				files: [ 'Gruntfile.js' ],
				options: {
					reload: true
				}
			},
			scripts: {
				files: [
					'bower_components/responsive-foundation/js-dev/*.js',
					'js-dev/*.js',
					'js/vendor/**/*.js'
				],
				tasks: [ 'scripts' ],
				options: {
					spawn: false,
				},
			},
			styles: {
				files: [
					'bower_components/responsive-foundation/css-dev/**/*.scss',
					'css-dev/*.scss'
				],
				tasks: [ 'styles' ],
				options: {
					spawn: false,
				}
			}
		},
		concat: {
			scripts: {
				src: [
					'bower_components/responsive-foundation/js-dev/*.js',
					'js-dev/*.js'
				],
				dest: 'js/script.js',
			}
		},
		uglify: {
			scripts: {
				expand: true,
				cwd: 'js',
				src: [ '*.js', '!*.min.js' ],
				dest: 'js',
				ext: '.min.js'
			},
			vendor: {
				expand: true,
				cwd: 'js/vendor',
				src: [ '**/*.js', '!**/*.min.js' ],
				dest: 'js/vendor',
				ext: '.min.js'
			}
		},
		sass: {
			devl: {
				options: {
					style: 'expanded',
					loadPath: 'bower_components/responsive-foundation/css-dev',
					bundleExec: true
				},
				files: {
					'style.css': 'css-dev/style.scss',
					'ie.css': 'css-dev/ie.scss'
				}
			},
			prod: {
				options: {
					style: 'compressed',
					loadPath: 'bower_components/responsive-foundation/css-dev',
					bundleExec: true
				},
				files: {
					'style.min.css': 'css-dev/style.scss',
					'ie.min.css': 'css-dev/ie.scss'
				}
			},
		},
		version: {
			functions: {
				options: {
					prefix: '[\'"]RESPONSIVE_\\w*_VERSION[\'"],\\s*\''
				},
				src: [ 'functions.php' ]
			},
			styles: {
				options: {
					prefix: 'Version:\\s*'
				},
				src: [ 'css-dev/style.scss' ]
			}
		},
		copy: {
			hooks: {
				options: {
					mode: true
				},
				src: 'hooks/post-merge',
				dest: '.git/hooks/post-merge'
			}
		}
	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-version' );

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask( 'styles',   [ 'sass' ] );
	grunt.registerTask( 'scripts',  [ 'concat', 'uglify' ] );
	grunt.registerTask( 'build',    [ 'styles', 'scripts' ]);
	grunt.registerTask( 'default',  [ 'watch' ]);

};
