const tbody = document.querySelector('#results tbody');
const form = document.getElementById('form');

window.addEventListener('load', loadEvents)

async function loadEvents(){
    
    // load table
    onLoad()
    // submit new data
    form.addEventListener('submit', onSubmit);
}
async function onLoad(){
    let response = await fetch('http://localhost:3030/jsonstore/collections/students');
    let data = await response.json();
    console.log(Object.values(data));
    Object.values(data).forEach(element => {
        let resultTr = createElem(element);
        tbody.appendChild(resultTr);
    });
}

function createElem(element){
    let tr = document.createElement('tr');
    for (let peronalData in element){
        let td = document.createElement('td');
        td.textContent = element[peronalData];
        tr.appendChild(td);
    }
    return tr;
}

async function onSubmit(){
    let dataForm = new FormData(form);
    let students = {
        firstName: dataForm.get('firstName'),
        lastName: dataForm.get('lastName'),
        facultyNumber: dataForm.get('facultyNumber'),
        grade: dataForm.get('grade')
    }
    await fetch('http://localhost:3030/jsonstore/collections/students',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(students)
    })
    // reload table
    onLoad();
}