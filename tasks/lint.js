/**
 * @module Gulp - Lint Tasks
 * @description Lint Tasks
 */
import gulp from 'gulp';
import stylelint from 'gulp-stylelint';
import eslint from 'gulp-eslint';
import gulpif from 'gulp-if';

/* Stylelint Options */
const stylelintOpts = {
  fix: true,
  reporters: [
    {
      formatter: 'string',
      console: true
    }
  ],
  configFile: '.stylelintrc.yml'
};

/* ESLint Options */
export const eslintOpts = {
  fix: true,
  useEslintrc: true,
  configFile: '.eslintrc.yml'
};

/**
 * @function isFixed
 * @description
 */
const isFixed = ( file ) => file.eslint != null && file.eslint.fixed;

/**
 * @function lintCSS
 * @description Lint CSS
 */
export const lintCSS = () => gulp.src( [ 'src/css/**/*.css' ], { base: './' } )
  .pipe( stylelint( stylelintOpts ) )
  .pipe( gulp.dest( '.' ) );

/**
 * @function lintJS
 * @description Lint JS
 */
export const lintJS = () => gulp.src( [ 'src/js/**/*.js' ], { base: './' } )
  .pipe( eslint( eslintOpts ) )
  .pipe( eslint.format() )
  .pipe( gulpif( isFixed, gulp.dest( './' ) ) )
  .pipe( eslint.format() )
  .pipe( eslint.failAfterError() );
