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
    it('loads article titles', async () => {

        // ASYNC with content we wait
        await page.goto('http://localhost:3000');
        await page.waitForSelector('.accordion'); // (1) before fetching content
        const content = await page.textContent('#main');

        // those test pass because server that the webapp fetches reqs is on same platform as mocha script
        // if it is remote, here, between await page.textContent() and tests, there should be a delay to reflect
        // on the delay in resolving promises and rendering webapp via JS and not just immediately scraping the empty HTML
            // easy way and full of flaws - make it wait time -> await page.waitForTimeout(3000) 
            // better -> not just wait time, but event (some section rendering) -> put it before fetching content(1)

        // SYNC with content we have here
        expect(content).to.contain('Scalable Vector Graphics'); // passing
        expect(content).to.contain('Open standard'); // passing
        expect(content).to.contain('Unix'); // passing
        expect(content).to.contain('ALGOL'); // passing
        // expect(content).to.contain('non-passing'); //failing
    })
})
