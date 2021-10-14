/**
 * @module Gulp - CSS Utils
 * @description Shared CSS Tasks
 */
import gulp from 'gulp';
import path from 'path';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';

// CSS
import cssnano from 'gulp-cssnano';
import postcss from 'gulp-postcss';
import aliases from 'gulp-style-aliases';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import postcssCustomMedia from 'postcss-custom-media';
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import postcssFunctions from 'postcss-functions';

// PostCSS Functions
import * as functions from '../../src/css/utilities/functions/functions.js';

/**
 * @function minifyCSSutil
 * @description Minify CSS
 */
export const minifyCSSutil = ( src = [], dest = './dist/css', extname = '.css' ) => gulp.src( src )
  .pipe( aliases( {
    '@utils': path.resolve( './src/css/utilities' ),
    '@templates': path.resolve( './src/templates' )
  } ) )
  .pipe( sourcemaps.init() )
  .pipe(
    postcss( [
      postcssImport(),
      postcssFunctions( {
        functions
      } ),
      postcssMixins(),
      postcssNested(),
      postcssCustomMedia(),
      autoprefixer( { cascade: false } )
    ] )
  )
  .pipe( gulp.dest( dest ) )
  .pipe( cssnano( { zindex: false, discardComments: { removeAll: true } } ) )
  .pipe( rename( { extname } ) )
  .pipe( sourcemaps.write( '.' ) )
  .pipe( gulp.dest( dest ) );
