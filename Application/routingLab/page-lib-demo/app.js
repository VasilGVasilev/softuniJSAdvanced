import page from './node_modules/page/page.mjs'


const main = document.querySelector('main');

page('/index.html', '/')
page('/', () => main.innerHTML = '<h2>Home Page</h2><p>Welcome to our site!</p>')
page('/catalog', () => main.innerHTML = '<h2>Catalog Page</h2><ul><li>Product 1</li><li>Product 2</li><li>Product 3</li></ul>')
page('/about', () => main.innerHTML = '<h2>About Page</h2><p>Contact: +1-555-5688</p>')

page.start();