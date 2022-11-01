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
            phonebook.replaceChildren(); // === phonebook.innerHTML = '';
            let resultArr = Object.values(data);
            console.log(resultArr);
            resultArr.forEach(element => {
                let li = document.createElement('li');
                let deleteBtn = document.createElement('button');

                li.textContent = `${element.person}: ${element.phone}`
                deleteBtn.textContent = 'Delete';
                deleteBtn.setAttribute('id', element._id);

                li.appendChild(deleteBtn);
                phonebook.appendChild(li);

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


    //delete
    phonebook.addEventListener('click', async (e)=>{
        let currentId = e.target.id;
        fetch(`http://localhost:3030/jsonstore/phonebook/${currentId}`, {
            method: 'DELETE'
        });
        e.target.parentElement.remove();
    })
}

attachEvents();