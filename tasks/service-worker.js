/**
 * @module Service Worker
 * @description Generate a service worker for our site.
 */
import workbox from 'workbox-build';

/**
 * @function generateServiceWorker
 * @description
 */
export const generateServiceWorker = () => workbox.generateSW( {
  globDirectory: './',
  globPatterns: [
    // 'img/**/*.ico',
    // 'img/**/*.svg',
    // 'img/**/*.jpg',
    // 'site.webmanifest',
    // 'manifest.json',
    'src/fonts/icomoon/style.css',
    'src/fonts/icomoon/fonts/icomoon.eot',
    'src/fonts/icomoon/fonts/icomoon.svg',
    'src/fonts/icomoon/fonts/icomoon.ttf',
    'src/fonts/icomoon/fonts/icomoon.woff'
  ],
  runtimeCaching: [
    {
      urlPattern: new RegExp( 'https://fonts.googleapis.com/' ),
      handler: 'StaleWhileRevalidate'
    }
  ],
  swDest: './dist/service-worker.js',
  clientsClaim: true,
  skipWaiting: true
} ).then( ( { warnings } ) => {
  // In case there are any warnings from workbox-build, log them.
  Object.entries( warnings ).forEach( ( warning ) => {
    console.warn( warning );
  } );
} ).catch( ( error ) => {
  console.warn( 'Service worker generation failed:', error );
} );
