function validate() {
    let input = document.getElementById('email');
    let pattern = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/g;
    input.addEventListener('change', myFunction);

    function myFunction(event){
        if(event.target.value.match(pattern)){
            event.target.className = '';
        } else {
            event.target.className = 'error';
        }
    }

}