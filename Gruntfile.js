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
					'bower_components/responsive-foundation/css-dev/**/*.scss',
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
					'bower_components/responsive-foundation/js-dev/**/*.js',
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
				sourceMap: true,
				indentType: 'space',
				indentWidth: 2,
				precision: '5',
				includePaths: [
					'bower_components/normalize.scss/sass',
					'bower_components/mathsass/dist/',
					'bower_components/responsive-foundation/css-dev'
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
					'-lf': null
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
						'!bower_components/**',
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
		bower: {
			install: {
				options: {
					targetDir: 'bower_components'
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
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-notify' );
	grunt.loadNpmTasks( 'grunt-version' );
	grunt.loadNpmTasks( 'grunt-phplint' );
	grunt.loadNpmTasks( 'grunt-bower-task' );
	grunt.loadNpmTasks( 'grunt-wp-i18n' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );


	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask( 'install',  [ 'copy:hooks', 'build' ] );
	grunt.registerTask( 'i18n',     [ 'clean', 'addtextdomain', 'makepot' ] );
	grunt.registerTask( 'styles',   [ 'sass' ] );
	grunt.registerTask( 'scripts',  [ 'phplint', 'concat', 'uglify' ] );
	grunt.registerTask( 'build',    [ 'bower:install', 'styles', 'scripts', 'i18n' ] );
	grunt.registerTask( 'default',  [ 'bower:install', 'watch' ] );
};
