function create(words) {
   
   let content = document.getElementById('content');

   for (let word of words){
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);

      div.addEventListener('click', reveal)
      // why not reveal()? -> it will execute immediately and due to no return in cb function, it will result in undefined
      // by not putting () we let it await the click, so it is user-based decision to trigger the cb function, not automatic
      // why we dont use HTML Attribute //onlick=()// or play with DOM element properties //btn.onlick = eventListen//?
      // -> addEventListener can be added multiply to the same element


      content.appendChild(div);

      function reveal(e){
         e.currentTarget.children[0].style.display = ''
      }
   }
}