function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');

  // the splice part is essential for taking every three array elements
  // using innerHTML to add <p>asdsa</p> can lead to security breaches to better
  // .createElement('p') and .appendChild
  let sentences = input.split('.').filter(s => s.length != 0);
  while(sentences.length > 0){
    let textForParagraph = sentences.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = textForParagraph;
    output.appendChild(p);
  }
}