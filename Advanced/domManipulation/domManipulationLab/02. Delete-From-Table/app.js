function deleteByEmail() {
    let output = document.querySelector('div#result');
    let input = document.querySelector('label input').value
    let arrOfMails = Array.from(document.querySelectorAll('tbody tr td:nth-child(2)')).map(e=>e.textContent);
    
    let allRows = document.querySelectorAll('tbody tr');
    console.log(arrOfMails.indexOf(input));
    if (arrOfMails.includes(input)){
        let index = arrOfMails.indexOf(input);
        allRows[index].parentNode.removeChild(allRows[index]);
        output.textContent = 'Deleted.'
    } else {
        output.textContent = 'Not found.'
    }
}