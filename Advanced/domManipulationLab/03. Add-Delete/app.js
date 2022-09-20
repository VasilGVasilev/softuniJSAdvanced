function addItem() {
    let input = document.querySelector('#newItemText').value;
    let items = document.querySelector('main ul');

    let newItem = document.createElement('li');
    newItem.textContent = input;

    let delLink = document.createElement('a');
    delLink.textContent = '[Delete]';
    delLink.href = '#';

    // better than .setAttribute('name', 'value')

    delLink.addEventListener('click', removeEl)

    function removeEl(){
        newItem.parentNode.removeChild(newItem)
    }

    items.appendChild(newItem)
    newItem.appendChild(delLink);
    
}