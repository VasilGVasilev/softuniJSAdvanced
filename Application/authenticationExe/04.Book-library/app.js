window.addEventListener('load', initialLoading);
const loadBooksBtn = document.getElementById('loadBooks');
const tbody = document.querySelector('table tbody');
let form = document.querySelector('form');

async function initialLoading(){

    loadBooksBtn.addEventListener('click', loadBooks);
    form.addEventListener('submit', submitBook);
    tbody.addEventListener('click', onClick);
}

async function loadBooks(){

    try {
        let response = await fetch('http://localhost:3030/jsonstore/collections/books');

        if(response.ok == false){
            const error = response.json();
            throw new Error(error.message);
        }

        let data = await response.json();

        Object.entries(data).forEach(obj => {
            console.log(obj);
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

    let formData = new FormData(form);
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
        console.log('del');
    }
}

async function editFunc(elClicked){
    let title = elClicked.parentElement.parentElement.children[0].innerHTML;
    let author = elClicked.parentElement.parentElement.children[1].innerHTML;
    let currentId = elClicked.parentElement.parentElement.id;

    // let formSave = document.createElement('form');
    // let h3 = document.createElement('h3');
    // h3.textContent = 'Edit Form';
    // formSave.appendChild(h3);
    // let label1 = document.createElement('label');
    // label1.textContent = 'Edit Form';
    // formSave.appendChild(label1);

    
    


    formBtn.addEventListener('click', async ()=>{

        
        let authorChanged = form.children[2].value;
        let titleChanged = form.children[4].value;
        const formSave = document.getElementById('saveForm');

        let response = await fetch(`http://localhost:3030/jsonstore/collections/books/${currentId}`, {
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({

                title: titleChanged,
                author: authorChanged
            
            })
        });
        
    })
    


    // formHeader.textContent = 'FORM';
    // formBtn.textContent = 'Submit';
}