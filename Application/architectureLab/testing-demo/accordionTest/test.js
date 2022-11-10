const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page; //declare reusable vars

describe('E2E tests', async function(){
    this.timeout(5000);

    // playwright configuration
    before(async () => { browser = await chromium.launch(); }); // chromium.launch({headless: false, slowMo: 500}) for debugging
    after(async () => { await browser.close(); }); // close browser after tests against memory leaks

    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    // actual test
    it('loads article titles', async () => {

        await page.goto('http://localhost:3000');
        await page.waitForSelector('.accordion'); // (1) before fetching content
        const content = await page.textContent('#main');

        expect(content).to.contain('Scalable Vector Graphics'); // passing
        expect(content).to.contain('Open standard'); // passing
        expect(content).to.contain('Unix'); // passing
        expect(content).to.contain('ALGOL'); // passing

    })

    it('more functionality', async () => { // it.only executes only this test
        
        await page.goto('http://localhost:3000');
        // no need for waitForSelector because .click() does that auto
        await page.click('text=More');
        await page.waitForSelector('.accordion p'); // BUT here you need due to click(more) triggering a request to show more text and you await the click not the response
        const visible = await page.isVisible('.accordion p');

        expect(visible).to.be.true; // passing

    })

    it('less functionality', async () => {
        
        await page.goto('http://localhost:3000');
        await page.click('text=More');
        await page.waitForSelector('.accordion p');
        let visible = await page.isVisible('.accordion p');
        expect(visible).to.be.true; // passing

        await page.click('text=Less');
        visible = await page.isVisible('.accordion p');
        expect(visible).to.be.false; // passing

    })
})
