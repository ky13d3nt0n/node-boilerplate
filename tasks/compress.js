/**
 * @module Gulp - Compress Tasks
 * @description Compress Tasks
 */
import gulp from 'gulp';
import gzip from 'gulp-gzip';
import brotli from 'gulp-brotli';
import gulpif from 'gulp-if';
import { gzipOpts, brotliOpts, supportedCompression } from '../../gulpfile.js';

/**
 * @function compressGZ
 * @description Compress to GZ format
 */
export const compressGZ = () => gulp.src( [ 'dist/js/*.js', 'dist/css/*.css' ] )
  .pipe( gulpif( supportedCompression.includes( 'gzip' ), gzip( gzipOpts ) ) )
  .pipe( gulp.dest( 'dist' ) );

/**
 * @function compressBR
 * @description Compress to BR format
 */
export const compressBR = () => gulp.src( [ 'dist/js/*.js', 'dist/css/*.css' ] )
  .pipe( gulpif( supportedCompression.includes( 'brotli' ), brotli.compress( brotliOpts ) ) )
  .pipe( gulp.dest( 'dist' ) );
