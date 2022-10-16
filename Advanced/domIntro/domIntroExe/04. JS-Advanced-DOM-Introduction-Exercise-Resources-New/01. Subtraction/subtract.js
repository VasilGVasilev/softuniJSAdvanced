function subtract() {
    let num1 = document.getElementById('firstNumber');
    let num2 = document.getElementById('secondNumber');
    let res = document.getElementById('result');
    let sum = Number(num1.value) - Number(num2.value);
    res.textContent = sum; 
}