// issues:
// -cannot fix user's catches to user's UI


window.addEventListener('load', loadingHomepage);
// how is _ownerId generated? so that it can be used for user specific edit

const logoutBtn = document.getElementById('logout');



async function loadingHomepage(){

    // disable all update/delete btns
    Array.from(document.querySelectorAll("#catches button"))
        .forEach(element => {
            element.disabled = true;
        });

    
    let loadBtn = document.querySelector(".load")
    loadBtn.addEventListener('click', loadFunc);

    if (sessionStorage.accessToken == null){ 
        //guest
        
        document.getElementById("user").style.display = 'none';
        document.getElementById("main").style.display = 'none';


    } else { 
        //user
            // custom welcome
        document.querySelector("p span").textContent = sessionStorage.getItem('email');


        document.getElementById("guest").style.display = 'none';
        document.querySelector(".add").disabled = false;
        

        let catches = Array.from(document.querySelectorAll(".catch"));
        catches.forEach(element => {
            if (sessionStorage._id === element.id){
                element.children[12].disabled = false;
                element.children[13].disabled = false;
            }
            
        });
        
    }
    logoutBtn.addEventListener('click', logoutFunc);
}

function loadFunc(){
    // show catches
    document.getElementById('main').style.display = 'inline-block';
    
}

async function logoutFunc(){
    const token = sessionStorage.getItem('accessToken');

    await fetch('http://localhost:3030/users/logout', {
        headers:{
            'X-Authorization': token
        }
    });

    sessionStorage.clear();

    window.location = 'http://127.0.0.1:5500/authenticationExe/05.Fisher-Game/src/'
}