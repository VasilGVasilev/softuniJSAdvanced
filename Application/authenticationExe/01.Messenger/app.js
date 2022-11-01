function attachEvents() {
    // take all input fields
    const authorName = document.querySelector('[name="author"]');
    const msgText = document.querySelector('[name="content"]');
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const textArea = document.getElementById('messages');
    // post send
    submitBtn.addEventListener('click', async ()=>{

        try {
            const response = await fetch('http://localhost:3030/jsonstore/messenger', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    author: authorName.value,
                    content: msgText.value
                })
            })
            if(response.ok == false){
                const error = response.json();
                throw new Error(error.message);
            }
            authorName.value = '';
            msgText.value = '';
            
        } catch (error) {
            alert(error.message)
        }
    })
    // get refresh
    refreshBtn.addEventListener('click', async ()=>{
        try {
            const response = await fetch('http://localhost:3030/jsonstore/messenger')
            if(response.ok == false){
                const error = response.json();
                throw new Error(error.message);
            }
            const data = await response.json();
            textArea.value = '';
            let arrayOfResults = Object.values(data);
            arrayOfResults.forEach(element => {
                textArea.value += `${element.author}: ${element.content}\n`
            });
            
        } catch (error) {
            alert(error.message)
        }
    })
}

attachEvents();