/**
 * @module Gulp - Images
 * @description Optimize our images
 */
import gulp from 'gulp';
// import imagemin, { mozjpeg, optipng, svgo } from 'gulp-imagemin';
import webp from 'gulp-webp';
import avif from 'gulp-avif';

/**
 * @function optimizeImages
 * @description Optimize various image formats
 */
export const optimizeImages = () => gulp.src( [
  'src/images/**/*.jpg',
  'src/images/**/*.png',
  'src/images/**/*.svg'
] )
  // .pipe( imagemin( [
  //   mozjpeg( { quality: 75, progressive: true } ),
  //   optipng( { optimizationLevel: 5 } ),
  //   svgo( {
  //     plugins: [
  //       {
  //         name: 'removeViewBox',
  //         active: true
  //       },
  //       {
  //         name: 'cleanupIDs',
  //         active: false
  //       }
  //     ]
  //   } )
  // ], { verbose: true } ) )
  .pipe( gulp.dest( '.' ) );

/**
 * @function convertWebp
 * @description Convert our images to webp, do png first in cases where jpg can be optimized
 */
export const convertWebp = () => gulp.src( [ './dist/img/**/*.png', './dist/img/**/*.jpg' ] )
  .pipe( webp() )
  .pipe( gulp.dest( './dist/img' ) );

/**
 * @function convertAvif
 * @description Convert our images to avif, do png first in cases where jpg can be optimized
 */
export const convertAvif = () => gulp.src( [ './dist/img/**/*.png', './dist/img/**/*.jpg' ] )
  .pipe( avif() )
  .pipe( gulp.dest( './dist/img' ) );
