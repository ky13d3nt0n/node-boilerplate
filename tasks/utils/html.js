/**
 * @module Gulp - HTML Utils
 * @description Shared HTMLTasks
 */
import gulp from 'gulp';
import rename from 'gulp-rename';
import path from 'path';

// HTML
import ejs from 'gulp-ejs';
import htmlmin from 'gulp-htmlmin';

/**
 * @function minifyHTMLutil
 * @description Minify HTML
 */
export const minifyHTMLutil = ( src = [], dest = './dist' ) => gulp.src( src )
  .pipe( ejs( {
    templates: path.resolve( './src/templates' )
  } ) )
  .pipe( rename( { extname: '.html' } ) )
  .pipe( htmlmin( {
    collapseWhitespace: true,
    removeComments: true
  } ) )
  .pipe( gulp.dest( dest ) );
