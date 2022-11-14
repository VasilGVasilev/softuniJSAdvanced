const { chromium } = require("playwright-chromium");
const { expect } = require('chai');
const host = 'http://127.0.0.1:5500/architectureExe/02.Book-Library/index.html';
const mockData = {
    "d953e5fb-a585-4d6b-92d3-ee90697398a0":{
        "author":"J.K.Rowling",
        "title":"Harry Potter and the Philosopher's Stone"},
    "d953e5fb-a585-4d6b-92d3-ee90697398a1":{
        "author":"Svetlin Nakov",
        "title":"C# Fundamentals"
    }
};

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
    // use page.route()
        // Routing provides the capability to modify network requests that are made by a page.
        // Once routing is enabled, every request matching the url pattern will stall unless it's continued, fulfilled or aborted.
    it('loads all books', async () =>{
        await page.route('**/jsonstore/collections/books', (route, request) => { //(1) intercept
            route.fulfill({
                body: JSON.stringify(mockData), //(2) return data
                status: 200,
                headers: {
                    'Access-Control-Cross-Origin': '*', //(3) tells browser that server uses non-same address apps
                    'content-type': 'application/json'
                }
            });
        }) //simualtes server running

        await page.goto(host);
        await page.click('text=Load all books'); //use logic of user clicking, thus, not id='' rather text;
        await page.waitForSelector('text=Svetlin'); //await for rendering
        const rowData = await page.$$eval('tbody tr', rows => rows.map(r => r.textContent));

        expect(rowData[0]).to.contains('Harry Potter');
        expect(rowData[0]).to.contains('Rowling');
        expect(rowData[1]).to.contains('C# Fundamentals');
        expect(rowData[1]).to.contains('Nakov');
    })

    it('creates book', async () => {
        await page.goto(host);

        await page.fill('input[name=title]', 'Title');
        await page.fill('input[name=author]', 'Author');

        const [request] = await Promise.all([ //otherwise the browser (awaiting interception like above) will block the test and submitTest will never ensue
            page.waitForRequest((request) => request.method("POST")), //intercepts request and returns data
            page.click('text=Submit')
        ])

        const data = JSON.parse(request.postData());
        expect(data.title).to.equal('Title');
        expect(data.author).to.equal('Author');

    })
})

// either Set Process to allow scripting and mocha
// or set 'scripts':{'test': 'mocha'} and cmd npm run test