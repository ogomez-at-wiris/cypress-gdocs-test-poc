const { defineConfig } = require("cypress");

const CHROME_PROFILE_PATH = `"C:\Users\Oriol\AppData\Local\Google\Chrome\User Data\Default"`; // Set this to your chrome default profile path, inside quotes

module.exports = defineConfig({
  "chromeWebSecurity": false,
  e2e: {
    "chromeWebSecurity": false,
    baseUrl: 'https://docs.google.com',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        console.log(`Browser: ${browser}, options: ${launchOptions}`)
        launchOptions.args.push(`--user-data-dir=${CHROME_PROFILE_PATH}`)
      })
    }
  }
})