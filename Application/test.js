function equasions(){
    let result = 0;
    function plusOne(){
        result++;
        console.log(result);
    }
    function minusOne(){
        result--;
        console.log(result);
    }
    function print(){
        console.log(result);
    }
    return {
        plusOne,
        minusOne,
        print
    }
}

let sum = equasions();

sum.minusOne();
sum.plusOne();
sum.print();

// higher-order but here we even have first-class sum = equasions
// closure idea heap
// like constructor function of object that uses class sugar syntax
// advanced objects that are not only consisting of property but methods (first-class)
// state -> functions -> return functions && constructor -> methods
// class based - class cannot be object || prototype based = prototype can be object
