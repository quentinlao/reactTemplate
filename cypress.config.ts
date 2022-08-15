import { defineConfig } from 'cypress';

export default defineConfig({
    fixturesFolder: 'cypress/fixtures',
    video: false,
    defaultCommandTimeout: 1000,
    viewportWidth: 1280,
    viewportHeight: 720,
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config);
        },
        baseUrl: 'http://localhost:8082/',
    },

    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack',
        },
    },
});
