const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {

    defaultCommandTimeout: 30000,

    slowTestThreshold: 30000,

  },

  

});
