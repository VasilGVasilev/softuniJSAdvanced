// No need for test.js to be in the same dir as project tested because it is based on url
// Even better to be separated, just run server

const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; //declare reusable vars

describe('E2E tests', async function(){
    this.timeout(5000);

    // playwright configuration
    before(async () => { browser = await chromium.launch(); }); //initialise browser launch only once before testing
    after(async () => { await browser.close(); }); // close browser after tests against memory leaks

    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    // actual test
    it('works', async () => {
        await page.goto('http://localhost:3000');
        await page.screenshot({ path: 'site.png'});
    })
})
// important CSS selector by text content:
// Case-insensitive       await page.click('text=More') !matches 'Show More'
// Case-sensitive        await page.click('text="More"') !doesnt match 'Show More' -> only 'More'

// lite-server is started in the directory you want it: see npm install manual -> script for run && node_modules local install
    // lite-server doesnt have the fixed root problem of live-server (installed locally)
    // both lite and live server are bad for testing! use simpler version
// live-server extension does work with this bug, but lite-server has it:

// Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" 
// is called; if returning a Promise, ensure it resolves. 
// (C:\Users\vasko\OneDrive\Desktop\Cod3\softuni-JS-Advanced\Application\architecturelab\testing-demo\accordiontest\test.js)

// Solution: this.timeout(5000) + making describe async