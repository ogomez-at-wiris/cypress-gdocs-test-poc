const { defineConfig } = require("cypress");

const { GoogleSocialLogin } = require("cypress-social-logins").plugins

const CHROME_PROFILE_PATH = `"C:\Users\Oriol\AppData\Local\Google\Chrome\User Data\Default"`; // Set this to your chrome default profile path, inside quotes

module.exports = defineConfig({
  "chromeWebSecurity": false,
  e2e: {
    baseUrl: 'https://docs.google.com',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      on("task", {
        GoogleSocialLogin: GoogleSocialLogin,
      })
      
      on('before:browser:launch', (browser = {}, launchOptions) => {
        console.log(`Browser: ${browser}, options: ${launchOptions}`)
        launchOptions.args.push(`--user-data-dir=c:\test`)
        console.log(`Options: ${launchOptions}`);
      })
    }
  }
})