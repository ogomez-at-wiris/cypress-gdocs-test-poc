const { defineConfig } = require("cypress");

const { googleLogin } = require("./src/google_login_helper")

module.exports = defineConfig({
  "chromeWebSecurity": false,
  e2e: {
    baseUrl: 'https://docs.google.com',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      on("task", {
        async getGoogleCookie({ username, password }) {
          const loginResult = await googleLogin(username, password)
          console.log('finish task');
          return null;
        }
      })
    }
  }
})