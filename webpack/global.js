/**
 * @module WebPack Config - Global
 * @description Our Webpack Config File
 */
import common from './common.js';

/**
  * @function globalConfig
  * @description Config for global js
  */
const config = {
  entry: {
    main: './src/js/main.js'
  },
  output: {
    filename: '[name].min.js'
  }
};

export default { ...common, ...config };
