/**
 * @module WebPack Config - Asset
 * @description Our Webpack Config File
 */
import webpack from 'webpack';
import glob from 'glob';
import path from 'path';
// import BundleAnalyzer from 'webpack-bundle-analyzer';
import common from './common.js';

// const { BundleAnalyzerPlugin } = BundleAnalyzer;

/**
 * @function assetConfig
 * @description Config for assets
 */
const config = {
  entry: glob.sync( './src/assets/**/script.js' ).reduce( ( acc, pathName ) => {
    const entry = path.basename( path.dirname( pathName ) );
    acc[ entry ] = pathName;

    return acc;
  }, {} ),
  output: {
    filename: './preamp/assets/[name]/script.js'
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      minChunks: 1
    },
    concatenateModules: false
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin( {
      maxChunks: 1
    } )
    // new BundleAnalyzerPlugin( {
    //   analyzerHost: '0.0.0.0',
    //   analyzerPort: '8082',
    //   openAnalyzer: false
    // } )
  ]
};

export default { ...common, ...config };
