import { render } from '../../node_modules/lit-html/lit-html.js'
import { api } from "./api.js";
import { trTemplate } from "./views.js";

let tbody = document.querySelector('tbody');
solve();

async function solve() {
   let result = Object.values(await api()).map(trTemplate);

   render(result, tbody)

   document.querySelector('#searchBtn').addEventListener('click', onClick);

}

function onClick() {
   
   let tableRows = document.querySelector('.container tbody').children;
   let input = document.querySelector('#searchField');
   let searchTerm = input.value;
   input.value = '';

   for(const row of tableRows){
      row.classList.remove('select');

      if(row.textContent.toLowerCase().includes(searchTerm.toLowerCase())){
         row.classList.add('select')
      }
   }
}

// tbody.children goes through <tr>; row in <tr> goes through <td>