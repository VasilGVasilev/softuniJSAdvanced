function solve() {
  let text = document.getElementById('text').value;
  let namingConv = document.getElementById('naming-convention');
  let result = document.getElementById('result');
  let arrOFText = text.split(' ');
  arrOFText = arrOFText.map(e=>e[0].toUpperCase() + e.slice(1).toLowerCase());
  if (namingConv.value === 'Camel Case'){
    let newText = arrOFText.join('');
    newText = newText[0].toLowerCase() + newText.slice(1);
    result.textContent = newText;
  } else if (namingConv.value === 'Pascal Case'){
    let newText = arrOFText.join('');
    result.textContent = newText;
  } else {
    result.textContent = 'Error!'
  }
}