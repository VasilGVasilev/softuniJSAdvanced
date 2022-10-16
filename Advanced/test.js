function foo(n) {
    const arr = n.toString().split("");
    let bol = true;
    for (let i = 0; i < arr.length - 1; i++){
        if(Number(arr[i]) !== Number(arr[i + 1])){
            bol = false;
            break;
        }
    }
    return `${bol}\n${arr.map(e=>Number(e)).reduce((a, v) => a + v, 0)}`
}
console.log(foo(2123))

