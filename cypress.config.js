const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

 async function setupNodeEvents(on,config)
 {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
 }
module.exports = defineConfig({
  projectId: '4pgfqh',
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  
  env: {
    URL: "https://freelance-learn-automation.vercel.app/login",
  },
  retries: {
    runMode: 1,
    
    },
  e2e: {
    
    pageLoadTimeout: 80000,
    setupNodeEvents, 
   // specPattern: 'cypress/integration/examples/BDD Framework/*.feature', // Correct path
    specPattern: 'cypress/integration/examples/*.js', // Correct path
    stepDefinitions: 'cypress/integration/examples/BDD Framework/ecom', // Correct path to step definitions
    supportFile: false,
    modifyObstructiveCode: false, // Prevent Cypress from modifying obstructive code
    chromeWebSecurity: false,
    
  },
});
