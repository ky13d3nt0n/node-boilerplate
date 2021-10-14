/**
 * @module Gulp
 * @description Gulp Process
 */
import gulp from 'gulp';
import { cleanAssets, cleanIcons } from './tasks/clean.js';
import { parseIcons } from './tasks/icomoon.js';
import { lintCSS, lintJS } from './tasks/lint.js';
import { minifyCSS, minifyJS } from './tasks/minify.js';
import { compressGZ, compressBR } from './tasks/compress.js';
import { generateServiceWorker } from './tasks/service-worker.js';
import { optimizeImages, convertWebp, convertAvif } from './tasks/images.js';
import { watchCSS, watchJS } from './tasks/watch.js';

/**
 * @function clean
 * @description Clean Task
 */
export const clean = gulp.series( cleanAssets );

/**
 * @function icons
 * @description Icon Task
 */
export const icons = gulp.series( cleanIcons, parseIcons );

/**
 * @function images
 * @description Image Task
 */
export const images = gulp.series( optimizeImages, convertWebp, convertAvif );

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
 * @function workers
 * @description Worker Tasks
 */
export const workers = gulp.series( generateServiceWorker );

/**
 * @function dist
 * @description Default task
 */
const dist = gulp.series(
  clean,
  icons,
  lint,
  minify,
  compress,
  workers
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
