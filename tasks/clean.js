/**
 * @module Gulp - Clean Tasks
 * @description Clean Tasks
 */
import del from 'del';

/**
 * @function cleanAssets
 * @description - Remove Old Assets
 * @param done - signal async completion
 */
export const cleanAssets = async ( done ) => {
  const assets = [
    'dist'
  ];

  const deletedPaths = await del( assets );
  console.log( 'Deleted Files:\n', deletedPaths.join( '\n' ) );
  done();
};


/**
 * @function cleanIcons
 * @description - Remove Old Icons
 * @param done - signal async completion
 */
export const cleanIcons = async ( done ) => {
  const assets = [
    'src/css/utilities/variables/icons.css'
  ];

  const deletedPaths = await del( assets );
  console.log( 'Deleted Files:\n', deletedPaths.join( '\n' ) );
  done();
};
