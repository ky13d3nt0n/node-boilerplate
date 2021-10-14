/**
 * @module Gulp - Image Tasks
 * @description Image Tasks
 */
import gulp from 'gulp';
import webp from 'gulp-webp';
import avif from 'gulp-avif';

/**
 * @function convertToWebp
 * @description Convert to webp format
 */
export const convertToWebp = () => gulp.src( [ 'web/content/themes/framework/assets/img/**/*.png', 'web/content/themes/framework/assets/img/**/*.jpg' ] )
  .pipe( gulp.dest( 'web/content/themes/framework/production/img' ) )
  .pipe( gulp.src( [ 'web/content/themes/framework/production/img/**/*.png', 'web/content/themes/framework/production/img/**/*.jpg' ] ) )
  .pipe( webp() )
  .pipe( gulp.dest( 'web/content/themes/framework/production/img/' ) );


/**
 * @function convertToAvif
 * @description Convert to webp format
 */
export const convertToAvif = () => gulp.src( [ 'web/content/themes/framework/assets/img/**/*.png', 'web/content/themes/framework/assets/img/**/*.jpg' ] )
  .pipe( gulp.dest( 'web/content/themes/framework/production/img' ) )
  .pipe( gulp.src( [ 'web/content/themes/framework/production/img/**/*.png', 'web/content/themes/framework/production/img/**/*.jpg' ] ) )
  .pipe( avif() )
  .pipe( gulp.dest( 'web/content/themes/framework/production/img/' ) );
