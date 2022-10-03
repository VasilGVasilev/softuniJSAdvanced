function validate() {
    let inputField = document.getElementById('email');
    let validEmail = /[a-z]+@[a-z]+.[a-z]+/g

    inputField.addEventListener('change', (event)=>{
        
        if(event.target.value.match(validEmail)){
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error')
        }
    })

}