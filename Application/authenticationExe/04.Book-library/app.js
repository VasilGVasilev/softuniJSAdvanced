window.addEventListener('load', initialLoading);
const loadBooksBtn = document.getElementById('loadBooks');
const tbody = document.querySelector('table tbody');
const submitForm = document.getElementById('submit');
const saveForm = document.getElementById('save');
let currentId;

async function initialLoading(){

    loadBooksBtn.addEventListener('click', loadBooks);
    submitForm.addEventListener('submit', submitBook);
    tbody.addEventListener('click', onClick);
}

async function loadBooks(){

    try {
        tbody.innerHTML = ''

        let response = await fetch('http://localhost:3030/jsonstore/collections/books');

        if(response.ok == false){
            const error = response.json();
            throw new Error(error.message);
        }

        let data = await response.json();

        Object.entries(data).forEach(obj => {
            let id = obj[0];
           let resultTr = createElements('tr',
           createElements('td', obj[1].title),
           createElements('td', obj[1].author),
           createElements('td', 
                createElements('button', 'Edit'),
                createElements('button', 'Delete')
           ));
           resultTr.setAttribute('id', id);
           tbody.appendChild(resultTr); 

        });

    } catch (error) {
        alert(error.message)
    }
}

function createElements(type, ...contents){

    let element = document.createElement(type);

    contents.forEach(c => {
        if(typeof c === 'string'){
            c = document.createTextNode(c);
        }
        element.appendChild(c);
    });

    return element;
}
// the above rucursive invoking happens due to
// createElement('td', obj.author) === window.createElement('td', obj.author)
// thus, the invocation is automatic on the browser
// Reminder on typical function invokation
// function myFunction( var ) { return var; } 
// myFunction( value );  -----> value in () <------

async function submitBook(e){

    e.preventDefault();

    let formData = new FormData(submitForm);
    let title = formData.get('title');
    let author = formData.get('author');
    
    try {
        // Error handling
        if(title == '' && author == ''){
            throw new Error(`Empty fields!`)
        }
        if(title == ''){
            throw new Error(`Empty title field!`)
        }
        if(author == ''){
            throw new Error(`Empty author field!`)
        }

        // req/res
        let response = await fetch('http://localhost:3030/jsonstore/collections/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                author: author,
                title: title
            })
        });
        if(response.ok==false){
            let error = response.json();
            throw new Error(error.message)
        }
        submitForm.children[2].value = ''
        submitForm.children[4].value = ''

    } catch (error) {
        alert(error.message);
    }
}

async function onClick(e){
    let elClicked = e.target;
    if(elClicked.innerText == 'Edit'){
        editFunc(elClicked);
    }
    if(elClicked.innerText == 'Delete'){
        delFunc(elClicked);
    }
}


async function editFunc(elClicked){
    let title = elClicked.parentElement.parentElement.children[0].innerHTML;
    let author = elClicked.parentElement.parentElement.children[1].innerHTML;
    currentId = elClicked.parentElement.parentElement.id;
    saveForm.children[2].value = title;
    saveForm.children[4].value = author;
    saveForm.addEventListener('submit', onSave);



}

async function onSave (e) {

    e.preventDefault();

    let formData = new FormData(saveForm);
    let title = formData.get('title');
    let author = formData.get('author');
    try {

        // req/res
        let response = await fetch(`http://localhost:3030/jsonstore/collections/books/${currentId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                author: author,
                title: title
            })
        });
        if(response.ok==false){
            let error = response.json();
            throw new Error(error.message)
        }
        saveForm.children[2].value = '';
        saveForm.children[4].value = '';
    } catch (error) {
        alert(error.message);
    }

}

async function delFunc(elClicked){
    let currentId = elClicked.parentElement.parentElement.id;
    elClicked.parentElement.parentElement.remove();
    await fetch(`http://localhost:3030/jsonstore/collections/books/${currentId}`, {
        method: 'DELETE'
    });
}
