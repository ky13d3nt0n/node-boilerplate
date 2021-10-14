/**
 * @module Service Worker
 * @description Generate a service worker for our site.
 */
import workbox from 'workbox-build';

/**
 * @function workbox__generateServiceWorker
 * @description
 */
export const serviceWorker = () => workbox.generateSW( {
  globDirectory: './',
  globPatterns: [
    'web/content/public/wp-content/themes/framework/assets/img/**/*.png',
    // 'assets/img/**/*.ico',
    // 'assets/img/**/*.svg',
    // 'assets/img/**/*.jpg',
    // 'site.webmanifest',
    // 'manifest.json',
    'web/content/themes/framework/assets/fonts/icomoon/style.css',
    'web/content/themes/framework/assets/fonts/icomoon/fonts/icomoon.eot',
    'web/content/themes/framework/assets/fonts/icomoon/fonts/icomoon.svg',
    'web/content/themes/framework/assets/fonts/icomoon/fonts/icomoon.ttf',
    'web/content/themes/framework/assets/fonts/icomoon/fonts/icomoon.woff'
  ],
  runtimeCaching: [
    {
      urlPattern: new RegExp( 'https://fonts.googleapis.com/' ),
      handler: 'StaleWhileRevalidate'
    }
  ],
  swDest: './service-worker.js',
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
