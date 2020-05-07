'use strict';

const { src, dest } = require( 'gulp' ),
		minify = require("gulp-minify");

const options = {
	outputStyle: 'expanded',
	indentType: 'space',
	indentWidth: 2,
	precision: '5',
	includePaths: [
		'node_modules/normalize-scss/sass',
		'node_modules/mathsass/dist/',
		'node_modules/responsive-foundation/css-dev',
	],
}


const paths = {
  styles: {
    src: ["./scss/*.scss", "./art-direction/*.scss"],
    dest: "./css/"
  },
  scripts: {
    src: ["./js/*.js", "./js/libs/*.js", "!./js/min/*.js"],
    dest: "./js"
  },
  svg: {
    src: "./icons/*.svg"
  },
  php: {
    src: ["./*.php", "./ads/*.php", "./art-direction/*.php", "./parts/**/*.php"]
  },
  ads: {
    src: "./ads/*.php"
  }
};

function compile() {
 	return src(["./js/**/*.js"])
    .pipe(
      minify({
        ext: {
          src: ".js",
          min: ".min.js"
        }
      })
    )
    .pipe(dest(paths.scripts.dest));
}

// exports.build = series(clean, parallel(css, javascript));
exports.javascript = compile;