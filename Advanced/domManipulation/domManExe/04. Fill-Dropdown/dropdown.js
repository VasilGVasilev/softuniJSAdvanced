function addItem() {
    let newItemText = document.querySelector('#newItemText');
    let newItemValue = document.querySelector('#newItemValue');
    let select = document.getElementById('menu');

    let optionElement = document.createElement('option');
    optionElement.textContent = newItemText.value;
    optionElement.value = newItemValue.value;

    select.appendChild(optionElement);

    newItemText.value = '';
    newItemValue.value = '';
}