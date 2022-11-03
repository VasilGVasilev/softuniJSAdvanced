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

    if (sessionStorage.accessToken == null){ 
        //guest
        
        document.getElementById("user").style.display = 'none';
        document.getElementById("main").style.display = 'none';

        let loadBtn = document.querySelector(".load")
        loadBtn.addEventListener('click', loadFunc);

    } else { 
        //user
            // custom welcome
        document.querySelector("p span").textContent = sessionStorage.getItem('email');

            // custom view
        document.getElementById("guest").style.display = 'none';
        document.querySelector(".add").disabled = false;
        


            // adding catches functionality
        const addForm = document.getElementById('addForm');
        addForm.addEventListener('submit', addCatches);
        
            // custom enable buttons for user's catches
        let loadBtn = document.querySelector(".load")
        loadBtn.addEventListener('click', loadFunc);


            // limit access to user's catches
        let limitCatch = document.querySelectorAll("div.catch");
        console.log(limitCatch);
        limitCatches(limitCatch);
    }
    logoutBtn.addEventListener('click', logoutFunc);
}

async function limitCatches(limitCatch){
    
    console.log(limitCatch);
        limitCatch.forEach(element => {
            if (sessionStorage._id === element.getAttribute('data-id')){
                element.children[12].disabled = false;
                element.children[13].disabled = false;
            }
            
        });
}

async function addCatches(e){
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let angler = formData.get('angler');
    let weight = Number(formData.get('weight'));
    let species = formData.get('species');
    let location = formData.get('location');
    let bait = formData.get('bait');
    let captureTime = Number(formData.get('captureTime'));

    try {
        // add error handling later

        // req <-> res
        const token = sessionStorage.getItem('accessToken');
        let response = await fetch('http://localhost:3030/data/catches', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify({
                angler,
                weight,
                species,
                location,
                bait,
                captureTime
            })
        })
        
        if(response.ok == false){
            const error = await response.json();
            throw new Error(error.message);
        }


        // input fields blank again

        deleteInputFields('form#addForm input')
        
        
    } catch (error) {
        alert(error.message);
    }
    
}

function deleteInputFields(form){
    document.querySelectorAll(form).forEach(element => {
        element.value = '';
    });
}

async function loadFunc(){
    // show catches field
    document.getElementById('main').style.display = 'inline-block';
    
    // generate
        // request/response
    try {
        let response = await fetch('http://localhost:3030/data/catches')

        if(response.ok == false){
            const error = await response.json();
            throw new Error(error.message);
        }
    
        let data = await response.json();
        let catches = document.getElementById('catches');
        data.forEach(element => {
            let infoInDiv = createCatch(element);
            catches.appendChild(infoInDiv);
        });
    } catch (error) {
            
    }

    
}

function createCatch(element){
    let div = document.createElement('div');
        div.setAttribute('class', 'catch')
        div.setAttribute('data-id', element._ownerId)

    let label1 = document.createElement('label');
        label1.textContent = 'Angler';
        div.appendChild(label1);

    let input1 = document.createElement('input');
        input1.value = element.angler;
        input1.setAttribute('class', 'angler')
        input1.setAttribute('type', 'text');
        div.appendChild(input1);

    let label2 = document.createElement('label');
        label2.textContent = 'Weight';
        div.appendChild(label2);

    let input2 = document.createElement('input');
        input2.value = element.weight;
        input2.setAttribute('class', 'weight')
        input2.setAttribute('type', 'text');
        div.appendChild(input2);

    let label3 = document.createElement('label');
        label3.textContent = 'Species';
        div.appendChild(label3);

    let input3 = document.createElement('input');
        input3.value = element.species;
        input3.setAttribute('class', 'species')
        input3.setAttribute('type', 'text');
        div.appendChild(input3);

    let label4 = document.createElement('label');
        label4.textContent = 'Species';
        div.appendChild(label4);

    let input4 = document.createElement('input');
        input4.value = element.location;
        input4.setAttribute('class', 'location')
        input4.setAttribute('type', 'text');
        div.appendChild(input4);

    let label5 = document.createElement('label');
        label5.textContent = 'Species';
        div.appendChild(label5);

    let input5 = document.createElement('input');
        input5.value = element.bait;
        input5.setAttribute('class', 'bait')
        input5.setAttribute('type', 'text');
        div.appendChild(input5);
        
    let label6 = document.createElement('label');
        label6.textContent = 'Capture Time';
        div.appendChild(label6);

    let input6 = document.createElement('input');
        input6.value = element.captureTime;
        input6.setAttribute('class', 'captureTime')
        input6.setAttribute('type', 'number');
        div.appendChild(input6);

    let button1 = document.createElement('button');
        button1.textContent = 'Update';
        button1.setAttribute('class', 'update')
        button1.setAttribute('data-id', element._id);
        div.appendChild(button1);
    
    let button2 = document.createElement('button');
        button2.textContent = 'Delete';
        button2.setAttribute('class', 'delete');
        button2.setAttribute('data-id', element._id);
        div.appendChild(button2);

    return div;
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