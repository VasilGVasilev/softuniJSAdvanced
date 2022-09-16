function extractText() {
    let arrOfTags = Array.from(document.getElementsByTagName('li'));
    let extracedField = document.getElementById('result');
    let result = arrOfTags.map(e => e.textContent);
    result.forEach(element => {
        extracedField.value += element + '\n';
    });
}