import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
    },
  },
  env: {
    // url: "http://localhost:3000",
    url: "https://app.lagoon.host-check-nextjs.us2.amazee.io",
  }
});
