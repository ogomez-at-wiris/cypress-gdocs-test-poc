const { defineConfig } = require("cypress");

const { getGoogleLoginCookies } = require("./src/google_login_helper")

module.exports = defineConfig({
  "chromeWebSecurity": false,
  "modifyObstructiveCode": false,
  e2e: {
    baseUrl: 'https://docs.google.com',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      on("task", {
        async loginToGoogleDocs ({ username, password }) {
          const loginData = await getGoogleLoginCookies(username, password)

          return loginData;
        }
      })
    }
  }
})