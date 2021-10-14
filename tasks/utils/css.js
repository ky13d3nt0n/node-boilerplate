/**
 * @module Gulp - CSS Utils
 * @description Shared CSS Tasks
 */
import gulp from 'gulp';
import rename from 'gulp-rename';
import path from 'path';

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
 * @function minifyCSS
 * @description Minify CSS
 */
export const minifyCSS = ( src = [], dest = './dist/css', extname = '.css' ) => gulp.src( src )
  .pipe( aliases( {
    '@utils': path.resolve( './src/css/utilities' ),
    '@templates': path.resolve( './src/templates' )
  } ) )
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
  .pipe( cssnano( { zindex: false } ) )
  .pipe( rename( { extname } ) )
  .pipe( gulp.dest( dest ) );
