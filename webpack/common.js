/**
 * @module WebPack Config - Common
 * @description Our Webpack Config File
 */
import path from 'path';
// import BundleAnalyzer from 'webpack-bundle-analyzer';
//
// const { BundleAnalyzerPlugin } = BundleAnalyzer;

/**
  * @function assetConfig
  * @description Config for assets
  */
export default {
  cache: true,
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    extensions: [ '.js', '.json' ],
    alias: {
      '@js': path.resolve( './src/js' ),
      '@utils': path.resolve( './src/js/utils' )
    }
  },
  output: {
    chunkFilename: '[name].min.js',
    path: path.resolve( '.' )
  },
  optimization: {
    minimize: true,
    splitChunks: {
      name: 'vendor',
      minChunks: 2
    },
    concatenateModules: true
  },
  plugins: [
    // new BundleAnalyzerPlugin( {
    //   analyzerHost: '0.0.0.0',
    //   analyzerPort: '8081',
    //   openAnalyzer: false
    // } )
  ]
};
