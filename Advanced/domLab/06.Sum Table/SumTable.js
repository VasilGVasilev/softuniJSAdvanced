function sumTable() {
    let costs = Array.from(document.querySelectorAll('tr td:nth-child(2)'));
    costs = costs.map(e=>e.textContent).filter(e=>e.length>0);
    let sum = 0;
    costs.forEach(element => {
        sum += Number(element)
    });
    let theSum = document.getElementById('sum');
    theSum.textContent = sum;
}