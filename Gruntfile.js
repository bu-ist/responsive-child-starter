module.exports = function(grunt) {

	// Require external packages.
	var autoprefixer = require('autoprefixer');
	var sass = require('node-sass');

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
					'node_modules/responsive-foundation/js-dev/*.js',
					'js-dev/**/*.js',
					'js/**/*.js'
				],
				tasks: [ 'scripts' ],
				options: {
					spawn: false
				}
			},
			styles: {
				files: [
					'node_modules/responsive-foundation/css-dev/**/*.scss',
					'css-dev/**/*.scss'
				],
				tasks: [ 'styles' ],
				options: {
					spawn: false
				}
			},
			phplint : {
				files : [ '**/*.php' ],
				tasks : [ 'phplint' ],
				options : {
					spawn : false
				}
			}
		},
		concat: {
			scripts: {
				src: [
					'node_modules/responsive-foundation/js-dev/**/*.js',
					'js-dev/**/*.js'
				],
				dest: 'js/script.js'
			}
		},
		uglify: {
			scripts: {
				expand: true,
				cwd: 'js',
				src: [ '*.js', '!*.min.js' ],
				dest: 'js',
				ext: '.min.js',
				extDot: 'last'
			},
			vendor: {
				expand: true,
				cwd: 'js/vendor',
				src: [ '**/*.js', '!**/*.min.js' ],
				dest: 'js/vendor',
				ext: '.min.js',
				extDot: 'last'
			}
		},
		sass: {
			options: {
				outputStyle: 'compressed',
				implementation: sass,
				sourceMap: true,
				indentType: 'space',
				indentWidth: 2,
				precision: '5',
				includePaths: [
					'node_modules/normalize-scss/sass',
					'node_modules/mathsass/dist/',
					'node_modules/responsive-foundation/css-dev'
				],
				bundleExec: true
			},
			devl: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'style.css': 'css-dev/style.scss',
					'ie.css': 'css-dev/ie.scss'
				}
			},
			prod: {
				files: {
					'style.min.css': 'css-dev/style.scss',
					'ie.min.css': 'css-dev/ie.scss'
				}
			}
		},
		postcss: {
			defaults: {
				options: {
					map: {
						inline: false, // Save all sourcemaps as separate files.
					},
					processors: [
						autoprefixer, // add vendor prefixes.
					],
				},
				src: ['ie.css', 'ie.min.css', 'style.css', 'style.min.css'],
			},
			admin: {
				options: {
					map: {
						inline: false, // Save all sourcemaps as separate files.
						annotation: 'admin/', // Save to this specified directory.
					},
					processors: [
						autoprefixer, // add vendor prefixes.
					],
				},
				src: ['admin/admin.css'],
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
		},
		phplint: {
			options : {
				phpArgs : {
					'-l -f': null
				}
			},
			all : {
				src : '**/*.php'
			}
		},
		addtextdomain: {
			options: {
				textdomain: 'responsive-child-starter'
			},
			update_all_domains: {
				options: {
					updateDomains: true
				},
				src: [
					'*.php',
					'**/*.php',
					'!\.git/**/*',
					'!bin/**/*',
					'!node_modules/**/*',
					'!tests/**/*',
					'!vendor/**/*'
				]
			},
			target: {
				files: {
					src: [
						'**.php',
						'**/*.php',
						'!node_modules/**',
						'!node_modules/**',
						'!bin/**',
						'!vendor/**'
					]
				}
			}
		},
		makepot: {
			target: {
				options: {
					domainPath: '/languages',
					potFilename: 'responsive-child-starter.pot',
					mainFile: 'functions.php',
					potHeaders: {
						poedit: true,
						'x-poedit-keywordslist': true
					},
					type: 'wp-theme',
					updateTimestamp: true
				}
			}
		},
		clean: {
			build: [
				'languages/*'
			]
		}
	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-postcss' );
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-notify' );
	grunt.loadNpmTasks( 'grunt-version' );
	grunt.loadNpmTasks( 'grunt-phplint' );
	grunt.loadNpmTasks( 'grunt-wp-i18n' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask( 'install',  [ 'copy:hooks', 'build' ] );
	grunt.registerTask( 'i18n',     [ 'clean', 'addtextdomain', 'makepot' ] );
	grunt.registerTask( 'styles',   [ 'version:styles', 'sass', 'postcss' ] );
	grunt.registerTask( 'scripts',  [ 'version:functions', 'phplint', 'concat', 'uglify' ] );
	grunt.registerTask( 'build',	[ 'sass', 'scripts', 'i18n' ] );
	grunt.registerTask( 'default',  [ 'watch' ] );
};
