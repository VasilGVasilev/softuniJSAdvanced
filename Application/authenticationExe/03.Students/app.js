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
    // data for optimised generator

    // Object.values(data).forEach(element => {
    //     let result = createElem('tr',
    //     createElem('td', element.firstName),
    //     createElem('td', element.lastName),
    //     createElem('td', element.facultyNumber),
    //     createElem('td', element.grade)
    //     );
    //     tbody.appendChild(result);
    // });
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

// Optimised Generator

// function createElem(type, ...content){
//     let element = document.createElement(type);

//     content.forEach(c => { //function can be variabale passed in too /higher order/
//         //check if c is a function
//         if(typeof c === 'number' || typeof c === 'string'){
//             c = document.createTextNode(c);
//         }
//         element.appendChild(c); // Element + textNode
//     })

//     return element;
// }

async function onSubmit(e){
    e.preventDefault();
    let dataForm = new FormData(form);
    let students = {
        firstName: dataForm.get('firstName'),
        lastName: dataForm.get('lastName'),
        facultyNumber: dataForm.get('facultyNumber'),
        grade: dataForm.get('grade')
    }

    try {
        let res = await fetch('http://localhost:3030/jsonstore/collections/students',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(students)
        })
        if(res.ok == false){
            const error = res.json();
            throw new Error(error.message)
        }
    } catch (error) {
        alert(error.message)
    }
    
    // reload table
    onLoad();
}