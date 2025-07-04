const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    baseUrl: 'https://silpo.ua',
    screenshotOnRunFailure: false,
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});