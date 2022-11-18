import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { towns } from './towns.js';

import { ulTemplate } from './view.js';
// X initial click renders all 
// X before search click rendered again
// X search looks for matches and returns indexes of matches
// the returned indexes are highlighed thourgh event delegation
// reset form


const townsDiv = document.getElementById('towns');
const searchText = document.getElementById('searchText');
const searchBtn = document.querySelector('button');
const results = document.getElementById('result');
let counter = 0;
start();
function start(){
   render(ulTemplate(towns), townsDiv);
   searchBtn.addEventListener('click', search)
}
function search() {
   
   // find matches and update class
   towns.map((town)=>{
      
      let found = town.match(searchText.value);
      if(found){
         let match = document.getElementById(`${town}`);
         match.setAttribute('class', 'active')
         counter++;
      }
   })
   searchText.value = '';
   results.textContent = `Results: ${counter}`
   counter = 0;

}
