function equasions(){
    let result = 0;
    function plusOne(){
        result++;
        console.log(result);
    }
    function minusOne(){
        result--;
        console.log(result);
    }
    function print(){
        console.log(result);
    }
    return {
        plusOne,
        minusOne,
        print
    }
}

let sum = equasions();

sum.minusOne();
sum.plusOne();
sum.print();

// higher-order but here we even have first-class sum = equasions
// closure idea heap
// like constructor function of object that uses class sugar syntax
// advanced objects that are not only consisting of property but methods (first-class)
// state -> functions -> return functions && constructor -> methods
// class based - class cannot be object || prototype based = prototype can be object

// also this is closure:

app.js

import page from '../node_modules/page/page.mjs';
page('/about', showAbout);

about.js

import { html } from '../../node_modules/lit-html/lit-html.js';
const aboutTemplate = () => html`
<h2>About Us</h2>
<p>Contact: +1-555-6197</p>`;


export function showAbout(ctx) {
    ctx.render(aboutTemplate());
}

// you invoke showAbout which is imported from about.js module
// but it is using another function -> aboutTemplate
// it will be undefined if not for the following:

// about.js is a closure function 
// it returns the exported showAbout
// showAbout uses aboutTemplate which is stored in heap via module capability of closures
