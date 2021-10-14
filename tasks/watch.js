/**
 * @module Gulp - Watch Tasks
 * @description Watch Tasks
 */
import gulp from 'gulp';
import path from 'path';
import notify from 'gulp-notify';

import { minifyHTML } from './utils/html.js';
import { minifyCSS } from './utils/css.js';
import { minifyJS } from './utils/js.js';

/**
 * @function sendNotification
 * @description Send a notification to user
 */
const sendNotification = ( file ) => notify( `${ file } - Successfully Updated!` ).write( '' );

/**
 * @function getAssetDirectory
 * @description Return name of asset directory
 */
const getAssetDirectory = ( file ) => `dist/${ path.basename( path.dirname( file ) ) }`;

/* -----------------------------------------------------------------------------
 *
 * HTML
 *
 * ----------------------------------------------------------------------------- */

/**
 * @function watchHTML
 * @description Watch our ejs assets for changes
 */
export const watchHTML = () => gulp.watch( [ 'src/**/*.ejs' ] ).on( 'change', ( file ) => {
  const dest = getAssetDirectory( file );
  sendNotification( file );

  return minifyHTML( file, dest );
} );


/* -----------------------------------------------------------------------------
 *
 * CSS
 *
 * ----------------------------------------------------------------------------- */

/**
 * @function watchCSS
 * @description Watch our css assets for changes
 */
export const watchCSS = () => gulp.watch( [ 'src/css/**/*.css' ] ).on( 'change', ( file ) => {
  const dest = getAssetDirectory( file );
  sendNotification( file );

  return minifyCSS( file, dest );
} );

/* -----------------------------------------------------------------------------
 *
 * JS
 *
 * ----------------------------------------------------------------------------- */

/**
 * @function watchJS
 * @description Watch our js assets for changes
 */
export const watchJS = () => gulp.watch( [ 'src/js/**/*.js' ] ).on( 'change', ( file ) => {
  const dest = getAssetDirectory( file );
  sendNotification( file );

  return minifyJS( file, dest );
} );
