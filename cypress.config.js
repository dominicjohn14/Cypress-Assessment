const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "im6dx7",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
    
  },
});
