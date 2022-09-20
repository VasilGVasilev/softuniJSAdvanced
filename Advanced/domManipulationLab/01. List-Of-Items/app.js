function addItem() {
    let input = document.querySelector('#newItemText').value;
    let output = document.querySelector('ul#items');
    let li = document.createElement('li');
    li.textContent = input;
    output.appendChild(li);
}