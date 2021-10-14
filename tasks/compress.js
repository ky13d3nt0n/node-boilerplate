/**
 * @module Gulp - Compress Tasks
 * @description Compress Tasks
 */
import gulp from 'gulp';
import gzip from 'gulp-gzip';
import brotli from 'gulp-brotli';
import gulpif from 'gulp-if';

/* Compression Options */
export const supportedCompression = [
  'gzip',
  'brotli'
];

/**
 * @function compressGZ
 * @description Compress to GZ format
 */
export const compressGZ = () => gulp.src( [ 'dist/css/*.min.css', 'dist/js/*.min.js' ], { base: 'dist' } )
  .pipe( gulpif( supportedCompression.includes( 'gzip' ), gzip( { level: 9 } ) ) )
  .pipe( gulp.dest( 'dist' ) );

/**
 * @function compressBR
 * @description Compress to BR format
 */
export const compressBR = () => gulp.src( [ 'dist/css/*.min.css', 'dist/js/*.min.js' ], { base: 'dist' } )
  .pipe( gulpif( supportedCompression.includes( 'brotli' ), brotli.compress( { skipLarger: true, quality: 11 } ) ) )
  .pipe( gulp.dest( 'dist' ) );
