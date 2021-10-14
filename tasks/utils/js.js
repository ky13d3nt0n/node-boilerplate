/**
 * @module Gulp - JS Utils
 * @description Shared JS Tasks
 */
import gulp from 'gulp';

// JS
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

/**
 * @function minifyJSutil
 * @description Minify JS
 */
export const minifyJSutil = ( src = [], dest = '.', config ) => gulp.src( src )
  .pipe( webpackStream( config ), webpack, ( err, stats ) => {
    /* Use stats to do more things if needed */
    console.log( stats.toString( { colors: true } ) );
  } )
  .pipe( gulp.dest( dest ) );
