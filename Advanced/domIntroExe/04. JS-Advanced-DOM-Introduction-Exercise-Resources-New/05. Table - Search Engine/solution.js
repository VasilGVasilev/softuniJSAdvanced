function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      

      
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