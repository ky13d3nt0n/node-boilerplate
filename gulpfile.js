/**
 * @module Gulp
 * @description Gulp Process
 */
import gulp from 'gulp';
import { cleanAssets } from './tasks/clean.js';
import { lintCSS, lintJS } from './tasks/lint.js';
import { watchCSS, watchJS } from './tasks/watch.js';
import { minifyCSS, minifyJS } from './tasks/minify.js';
import { compressGZ, compressBR } from './tasks/compress.js';

/**
 * @function clean
 * @description Clean Task
 */
export const clean = gulp.series( cleanAssets );

/**
 * @function lint
 * @description Linting Tasks
 */
export const lint = gulp.series( lintCSS, lintJS );

/**
 * @function minify
 * @description Minify Tasks
 */
export const minify = gulp.series( minifyCSS, minifyJS );

/**
 * @function compress
 * @description Compress Tasks
 */
export const compress = gulp.series( compressGZ, compressBR );

/**
 * @function dist
 * @description Default task
 */
const dist = gulp.series(
  clean,
  lint,
  minify,
  compress
);

/**
 * @function watch
 * @description Watch Task
 */
export const watch = gulp.series(
  dist,

  gulp.parallel( watchCSS, watchJS )
);

/**
 * @function dev
 * @description Gulp Dev Tasks
 */
export const dev = gulp.series( watch );

export default dist;
