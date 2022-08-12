const Puppeteer = require("puppeteer");

const USER_AGENT = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36`

const googleLogin = async (username, password) => {
    console.log('going to launch browser')
    const browser = await Puppeteer.launch({
        headless: true,
    });

    console.log('launched browser')

    const page = await browser.newPage();

    await page.setUserAgent(USER_AGENT);

    await page.goto('https://docs.google.com');

    console.log('opened google docs page');

    await page.type('#identifierId', username);
    await page.click('#identifierNext');

    console.log('username confirmed');

    await page.waitForSelector('input[type="password"]', { visible: true });

    console.log('Setting password...');

    await page.type('input[type="password"]', password);
    await page.keyboard.press('Enter')

    await page.waitForNavigation();
    console.log('finish puppeteer process success');

    return null;
}

module.exports.googleLogin = googleLogin;
