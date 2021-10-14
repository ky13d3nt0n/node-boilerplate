/**
 * @module Gulp - Minify Tasks
 * @description Minify Build Tasks
 */
import { minifyHTMLutil } from './utils/html.js';
import { minifyCSSutil } from './utils/css.js';
import { minifyJSutil } from './utils/js.js';

// Webpack Config
// import assetWebpackConfig from '../webpack/asset.js';
import globalWebpackConfig from '../webpack/global.js';

/* -----------------------------------------------------------------------------
 *
 * HTML
 *
 * ----------------------------------------------------------------------------- */

/**
 * @function minifyHTML
 * @description Minify HTML
 */
export const minifyHTML = () => minifyHTMLutil( [ 'src/**/*.ejs' ] );


/* -----------------------------------------------------------------------------
 *
 * CSS
 *
 * ----------------------------------------------------------------------------- */

/**
 * @function minifyCSS
 * @description Minify CSS
 */
export const minifyCSS = () => minifyCSSutil( [ 'src/css/style.css' ], 'dist/css', '.min.css' );


/* -----------------------------------------------------------------------------
 *
 * JS
 *
 * ----------------------------------------------------------------------------- */

/**
 * @function minifyJS
 * @description Minify JS
 */
export const minifyJS = () => minifyJSutil( [ './src/js/main.js' ], 'dist/js', globalWebpackConfig );
