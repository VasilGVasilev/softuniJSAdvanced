function validate() {
    document.getElementById('company').addEventListener('change', ()=>{
        let companyInfo = document.getElementById('companyInfo');
        if(document.getElementById('company').checked == false){
            companyInfo.style.display = 'none';
        } else {
            companyInfo.style.display = 'block';
        }
    })


    let submit = document.getElementById('submit');


    submit.addEventListener('click', onClick)
    function onClick(e){

        e.preventDefault();//stop auto refresh of page

        let invalidFields = [];

        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        let passPattern = /^[\w]{5,15}$/;
        let emailPattern = /^[^@.]+@[^@]*\.[^@]+$/;

        let username = document.getElementById('username');
        let email = document.getElementById('email')
        let password = document.getElementById('password');
        let confirmPass = document.getElementById('confirm-password');
        let checkBox = document.getElementById('company');

        if(!usernamePattern.test(username.value)){
            invalidFields.push(username);
        } 

        if(!emailPattern.test(email.value)){
            invalidFields.push(email);
        } 
        if(!passPattern.test(password.value) || confirmPass.value !== password.value){
            invalidFields.push(password);
            invalidFields.push(confirmPass);
        } 
        if(checkBox.checked){
            let companyId = document.getElementById('companyNumber');
            let companyPattern = /^[0-9]{4}$/;
            if(!companyPattern.test(companyId.value)){
                invalidFields.push(companyId);
            }
        }
        invalidFields.forEach(field => field.style.borderColor = 'red')
        !invalidFields.length ? document.querySelector('#valid').style.display = 'block' : document.querySelector('#valid').style.block = 'none';
    }
}
