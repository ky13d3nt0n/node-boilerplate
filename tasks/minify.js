/**
 * @module Gulp - Minify Tasks
 * @description Minify Build Tasks
 */
import gulp from 'gulp';
// import sourcemaps from 'gulp-sourcemaps';
// import terser from 'gulp-terser';
import rename from 'gulp-rename';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from '../../webpack.config.js';
import postcss from 'gulp-postcss';
import postcssImport from 'postcss-import';
import postcssCustomMedia from 'postcss-custom-media';
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import postcssFunctions from 'postcss-functions';
import { /* terserOpts, */ rewriteOpts } from '../../gulpfile.js';

import { rem, lh } from '../../web/content/themes/framework/assets/css/utilities/functions/functions.js';

/**
 * @function minifyCSS
 * @description Minify CSS
 */
export const minifyCSS = () => gulp.src( './web/content/themes/framework/assets/css/style.css' )
  // .pipe( sourcemaps.init() )
  .pipe(
    postcss( [
      postcssImport(),
      postcssFunctions( {
        functions: { rem, lh }
      } ),
      postcssMixins(),
      postcssNested(),
      postcssCustomMedia()
    ] )
  )
  .pipe( gulp.dest( './web/content/themes/framework/production' ) )
  .pipe( rename( rewriteOpts ) )
  // .pipe( sourcemaps.write( './sourcemaps' ) )
  .pipe( gulp.dest( './web/content/themes/framework/production' ) );


/**
 * @function minifyJS
 * @description Minify JS
 */
export const minifyJS = () => gulp.src( './web/content/themes/framework/assets/js/main.js' )
  // .pipe( sourcemaps.init() )
  // .pipe( gulp.dest( './production' ) )
  .pipe( webpackStream( webpackConfig ), webpack, ( err, stats ) => {
    /* Use stats to do more things if needed */
    console.log( stats.toString( { colors: true } ) );
  } )
  // .pipe( terser( terserOpts ) )
  // .pipe( rename( rewriteOpts ) )
  // .pipe( sourcemaps.write( './sourcemaps' ) )
  .pipe( gulp.dest( './web/content/themes/framework/production' ) );
