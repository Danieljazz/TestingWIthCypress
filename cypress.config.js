const { defineConfig } = require("cypress");
const { dotenv } = require("dotenv");
dotenv.config();
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        async resetData() {
          await axios.post(`${process.env.BASE_BACKEND_URL}/testData/seed`);
          return null;
        },
      });
    },
    excludeSpecPattern: "**/e2e/2-advanced-examples/*",
  },
});
