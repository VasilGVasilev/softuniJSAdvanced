import { html, render } from '../../node_modules/lit-html/lit-html.js'

async function getAllItems() {
    const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    let data = await res.json();
    return data;
}

let items = Object.values(await getAllItems()); //getAllItems returns a promise -> await is possible outside async

let cardTemplate = html`${items.map((item)=>html`<option value=${item._id}>${item.text}</option>`)}`;
let main = document.getElementById('menu');
render(cardTemplate, main);

document.querySelector('input[type="submit"]').addEventListener('click', addItem);

async function addItem(e) {
    e.preventDefault();
    let textS = document.querySelector('#itemText');
    let text = textS.value;
    let res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown',{
        method: 'POST',
        headers: {
            'Content-Type': 'appication/json'
        },
        body: JSON.stringify({text})
    })
    let data = await res.json();

    items.push(data);//rewrite rendering data, so new item does not replace all previously added
    if(res.ok){
        let cardTemplate = html`${items.map((item)=>html`<option value=${item._id}>${item.text}</option>`)}`;
        textS.value = '';
        render(cardTemplate, main);
    }
}