/**
 * @module Module
 * @description Module Description
 */
import express from 'express';
import http from 'http';
import path from 'path';

const address = '0.0.0.0';
const port = '8080';

/**
 * Create our server
 */
const app = express();
export const server = http.createServer( app );

app.get( '/', ( req, res ) => {
  res.sendFile( path.join( path.resolve( 'index.html' ) ) );
} );

/**
 * @function serverAssets
 * @description Serve up our necessary assets
 */
const serveAssets = () => {
  app.use( '/css', express.static( path.resolve( './dist/css' ) ) );
  app.use( '/js', express.static( path.resolve( './dist/js' ) ) );
  app.use( '/', express.static( path.resolve( './dist/' ) ) );
};

/**
 * @function createListener
 * @description Creates a listener on the specified port or path
 */
const createListener = () => {
  server.listen( port, address );

  console.info( 'Server:: createListener();' );
};


/**
 * @function serverListening
 * @description "listening" event triggered
 */
const serverListening = () => {
  console.info( `Server:: Listening at: http://${ address }:${ port }` );
};


/**
 * @function serverConnection
 * @description "connection" event triggered
 */
const serverConnection = () => {
  console.info( 'Server:: serverConnection();' );
};


/**
 * @function serverClose
 * @description "close" event triggered
 */
const serverClose = () => {
  console.info( 'Server:: serverClose();' );
};

/**
 * @function bindEvents
 * @description Bind events for this module
 */
const bindEvents = () => {
  server.on( 'listening', serverListening );
  server.on( 'connection', serverConnection );
  server.on( 'close', serverClose );

  console.info( 'Server:: bindEvents();' );
};


/**
 * @function init
 * @description Kick off this modules functions
 */
const init = () => {
  bindEvents();
  createListener();
  serveAssets();

  console.log( 'Server:: init();' );
};

init();
