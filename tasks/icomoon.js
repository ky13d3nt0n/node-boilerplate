/**
 * @module Gulp - Icomoon Tasks
 * @description Icomoon Tasks
 */
import css from 'css';
import fs from 'fs';
import path from 'path';

const iconStylesheet = path.resolve( './web/content/themes/framework/assets/css/utilities/variables/icons.css' );

/**
 * @function parseIcons
 * @description Parse the icomoon stylesheet
 */
export const parseIcons = ( done ) => {
  const stylesheet = path.resolve( './web/content/themes/framework/assets/fonts/icomoon/style.css' );
  const options = {
    silent: false,
    source: stylesheet
  };

  // Read our stylesheet
  fs.readFile( stylesheet, 'utf8', ( err, data ) => {
    if ( err ) {
      console.log( err );
      done();
    }

    // Parse into AST Object, filter out unwanted css, then rebuild the file.
    const ast = css.parse( data, options );
    const icons = ast.stylesheet.rules.filter( ( rule ) => rule.type === 'rule' && rule.selectors.length === 1 );

    const iconVariables = [];

    icons.forEach( ( icon ) => {
      const { selectors } = icon;

      selectors.forEach( ( selector ) => {
        const name = selector.replace( /(:before|\.)/g, '' ).toLowerCase();
        let { value } = icon.declarations.find( ( declaration ) => declaration.property === 'content' );
        value = value.replace( /"/g, "'" );

        const iconVariable = {
          name,
          value
        };

        iconVariables.push( iconVariable );
      } );
    } );

    // Add our icons to the file
    const logger = fs.createWriteStream( iconStylesheet );

    logger.write( ':root {\r\n' );

    iconVariables.forEach( ( icon ) => {
      logger.write( `\t--${ icon.name }: ${ icon.value };\r\n` );
    } );

    logger.write( '}\r\n' );
    logger.end();
  } );

  done();
};
