var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [],
    stripePrefix: 'dist',
    root: 'dist/',
    plugins:[
        new SWPrecacheWebpackPlugin({
            cacheId: 'tpa-calc',
            filename: 'service-worker.js',
            staticFileGlobs: [
                'dist/tpa/index.html',
                'dist/tpa/**.js',
                'dist/tpa/**.css'
            ],

        })
    ],
    stripePrefix: 'dist/assets',
    mergeStaticsConfig: true
};
