function calculator() {
    // closure
    let field1 = null;
    let field2 = null;
    let result = null;
 
    return {
        init,
        add,
        subtract
    }

    function init(f1, f2, fr){
        field1 = document.getElementById(f1);
        field2 = document.getElementById(f2);
        result = document.getElementById(fr); 
    }
    function add(){
        result.value = Number(field1.value) + Number(field2.value);
    }
    function subtract(){
        result.value = Number(field1.value) - Number(field2.value);
    }
}




