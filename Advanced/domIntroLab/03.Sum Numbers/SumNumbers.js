function calc() {
    let numOne = document.getElementById('num1').value;
    let numTwo = document.getElementById('num2').value;
    let result = Number(numOne) + Number(numTwo);
    let sum = document.getElementById('sum')
    sum.value = result;
}
