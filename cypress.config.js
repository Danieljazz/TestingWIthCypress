const { defineConfig } = require("cypress");
const axios = require("axios");
module.exports = defineConfig({
  e2e: {
    env: {
      BASE_BACKEND_URL: "http://localhost:3001",
      BASE_UI_URL: "http://localhost:3000",
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
