function search() {
   let word = document.getElementById('searchText');
   let arrOfCities = Array.from(document.querySelectorAll('li')).map(e=>e.textContent);
   console.log(arrOfCities);
   let wordSaved = word.value;
   let pattern =  new RegExp(wordSaved, 'g');
   let counterOfCityInArr = 0;
   let wordsMatched = [];
   for (let city of arrOfCities){
      
      let found = city.match(pattern)
      if(found !== null){
         let toBeUnderlined = document.querySelectorAll('#towns li')[counterOfCityInArr];
         toBeUnderlined.innerHTML = `<u><b>${city}</b></u>`;
         console.log(toBeUnderlined);
         wordsMatched.push(found);
         
      } else {
         found === false;
      }
      // console.log(found);
      document.getElementById('result').textContent = `${wordsMatched.length} matches found`
      counterOfCityInArr++;
   }
   word.value = ''
}
