const { defineConfig } = require("cypress");
const axios = require("axios");
module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    env: {
      BASE_BACKEND_URL: "http://localhost:3001",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        async resetData() {
          await axios.post(`${config.env.BASE_BACKEND_URL}/testData/seed`);
          return null;
        },
      });
    },
    excludeSpecPattern: "**/e2e/2-advanced-examples/*",
  },
});
