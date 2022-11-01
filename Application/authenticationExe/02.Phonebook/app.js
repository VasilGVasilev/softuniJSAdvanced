function attachEvents() {
    // inputs
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');
    const phonebook = document.getElementById('phonebook');

    // load
    loadBtn.addEventListener('click', ()=>{
        fetch('http://localhost:3030/jsonstore/phonebook')
            .then(res => res.json())
            .then(data => loadData(data))
        function loadData(data) {
            phonebook.innerHTML = '';
            let resultArr = Object.entries(data);
            
            resultArr.forEach(element => {
                let phoneInBook = element[1].phone;
                let personInBook = element[1].person;
                let key = element[0];
                let li = document.createElement('li');
                let deleteBtn = document.createElement('button');
                li.textContent = `${personInBook}: ${phoneInBook}`
                deleteBtn.textContent = 'Delete';
                li.appendChild(deleteBtn);
                phonebook.appendChild(li);
                deleteBtn.addEventListener('click', onDelete)
                //delete
                function onDelete(e, key){
                    fetch(`http://localhost:3030/jsonstore/phonebook/${key}`, {
                        method: 'DELETE',
                        redirect: 'follow'
                    });
                    let li = e.target.parentElement;
                    li.remove();
                }
            });
        }
        
    })

    


    // create
    createBtn.addEventListener('click', async ()=>{
        let respone = await fetch(`http://localhost:3030/jsonstore/phonebook/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                person: person.value,
                phone: phone.value
            })
        })
        loadBtn.click();
        person.value = '';
        phone.value = '';
    })
}

attachEvents();