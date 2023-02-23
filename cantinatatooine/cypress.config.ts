import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: 'cypress/fixtures',
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
    baseUrl: "http://localhost:3000",
  },
});
