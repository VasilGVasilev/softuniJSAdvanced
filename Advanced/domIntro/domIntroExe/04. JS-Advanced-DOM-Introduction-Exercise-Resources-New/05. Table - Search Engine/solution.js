function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
   
      let m = document.querySelectorAll('tbody tr');
      for (l of m){
         console.log(l.textContent);
      }
      
      // mapping the bucket of inputs
      let arrOfPossibleInputs = Array.from(document.querySelectorAll('tbody tr td')).map(e=>e.textContent);
      
      // clear selected
      Array.from(document.querySelectorAll('tbody tr')).forEach((el) => el.classList.remove('select'));
      
      // matching logic
      let searchedWord = document.getElementById('searchField').value;
      for (let validInput of arrOfPossibleInputs){
         if (validInput.match(searchedWord)) {
            let index = arrOfPossibleInputs.indexOf(validInput);
            document.querySelectorAll('tbody tr td')[index].parentNode.className = 'select';
         }
      }

      // clear input
      document.getElementById('searchField').value = '';
   }
}

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
 
   let rows = document.querySelectorAll('tbody tr');
   let input = document.getElementById('searchField');
   function onClick(){
     for (let row of rows){
       row.classList.remove('select');
       if(row.textContent.includes(input.value)){
         row.className = 'select'
       }
     }
     input.value = '';
   }
 }