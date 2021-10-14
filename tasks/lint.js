/**
 * @module Gulp - Lint Tasks
 * @description Lint Tasks
 */
import gulp from 'gulp';
import stylelint from 'gulp-stylelint';
import eslint from 'gulp-eslint';
import gulpif from 'gulp-if';
import { stylelintOpts, eslintOpts } from '../../gulpfile.js';

/**
 * @function isFixed
 * @description
 */
const isFixed = ( file ) => file.eslint != null && file.eslint.fixed;

/**
 * @function lintCSS
 * @description Lint CSS
 */
export const lintCSS = () => gulp.src( 'web/content/themes/framework/assets/css/**/*.css' )
  .pipe( stylelint( stylelintOpts ) )
  .pipe( gulp.dest( 'web/content/themes/framework/assets/css/' ) );

/**
 * @function lintJS
 * @description Lint JS
 */
export const lintJS = () => gulp.src( 'web/content/themes/framework/assets/js/**/*.js' )
  .pipe( eslint( eslintOpts ) )
  .pipe( eslint.format() )
  .pipe( gulpif( isFixed, gulp.dest( 'web/content/public/wp-content/themes/framework/assets/js/' ) ) )
  .pipe( eslint.format() )
  .pipe( eslint.failAfterError() );
