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
    tbody.innerHTML = '';
    Object.values(data).forEach(element => {
        let resultTr = createElem(element);
        tbody.appendChild(resultTr);
    });
}

function createElem(element){
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.textContent = element.firstName;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = element.lastName;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = element.facultyNumber;
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.textContent = element.grade;
    tr.appendChild(td4);

    return tr;
}

async function onSubmit(e){
    e.preventDefault();
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