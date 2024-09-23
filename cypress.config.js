const { defineConfig } = require("cypress");
const createBundler = require ("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require ("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require ("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  projectId: 'g5xd17',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions:{
      charts: true,
      reportTitle: 'Projeto do curso de Cypress',
      reportPageTitle: 'Projeto do curso de Cypress 2 '
    },
    baseUrl: 'https://automationpratice.com.br/',
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});
