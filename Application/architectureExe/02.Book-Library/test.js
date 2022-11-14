const { chromium } = require("playwright-chromium");
const { expect } = require('chai');
let host = 'http://127.0.0.1:5500/architectureExe/02.Book-Library/index.html';

describe('Tests', async function(){ //async function due to promises, function not arrow because we need context
    // boilerplate
    this.timeout(10000);

    let browser, page;

    before(async () => {
        browser = await chromium.launch({headless: false});
    })
    after(async () => {
        await browser.close();
    })

    beforeEach(async () => {
        page = await browser.newPage();
    })
    afterEach(async () => {
        page.close();
    })

    // test but needs promise due to async arrow function
    // it('works', async() => {
    //     await new Promise(r => setTimeout(r, 2000));
    //     expect(1).to.equal(1);
    // })

    // if tests are end-to-end they work only with working server based on REST

    it('loads all books', async()=>{
        await page.goto(host);
        await page.click('text=Load all books'); //use logic of user clicking, thus, not id='' rather text;
        await page.waitForSelector('text=Svetlin'); //await for rendering
        const rowData = await page.$$eval('tbody tr', rows => rows.map(r => r.textContent));
        // expect(rowData).to.contain('Svetlin');
        // expect(rowData.join()).to.contains('Svetlin Nakov');
        expect(rowData[0]).to.contains('Harry Potter');
        expect(rowData[0]).to.contains('Rowling');
        expect(rowData[1]).to.contains('C# Fundamentals');
        expect(rowData[1]).to.contains('Nakov');
    })
})

// either Set Process to allow scripting and mocha
// or set 'scripts':{'test': 'mocha'} and cmd npm run test