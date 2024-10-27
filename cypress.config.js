//cypress.config.js

const { defineConfig } = require("cypress");


module.exports = defineConfig({

  viewportWidth: 1280,
  viewportHeight: 800,

  reporter: 'cypress-mochawesome-reporter',

  e2e: {

    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);

    },

  },

});