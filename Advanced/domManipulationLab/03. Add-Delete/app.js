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

    function removeEl(event){
        event.target.parentElement.remove();
        // console.log(event);
        // so that we the targeting is automatic not like previously 
        // done by you manually - newItem.parentElement.childRemove(newItem)
    }

    items.appendChild(newItem)
    newItem.appendChild(delLink);
    
}