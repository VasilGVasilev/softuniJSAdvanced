window.addEventListener("load", solve);
function solve(){

    const input = {
        description: document.getElementById('description'),
        name: document.getElementById('client-name'),
        phone: document.getElementById('client-phone')
    };

    let sendBtn = document.querySelector("button[type='submit']").addEventListener('click', sendData);

    function sendData(e){
        e.preventDefault();
        
        if(input.description.value || input.name.value || input.phone.value){
            let select = e.currentTarget.parentElement.querySelector('select#type-product');
            let typeOfGadget = select.options[select.selectedIndex].value;
            let completedSectionPlace = document.querySelector('section#completed-orders');

            // creating div in received
            const div = document.createElement('div');
            div.classList.add('container');

            div.appendChild(createElement('h2', `Product type for repair: ${typeOfGadget}`));
            div.appendChild(createElement('h3', `Client information: ${input.name.value}, ${input.phone.value}`));
            div.appendChild(createElement('h4', `Description of the problem: ${input.description.value}`));
            
            let startBtn = createElement('button', 'Start repair', `start-btn`);
            let finishBtn = createElement('button', 'Finish repair', `finish-btn`, `disabled`);
            
            div.appendChild(startBtn);
            div.appendChild(finishBtn);

            let receivedSectionPlace = document.querySelector('section#received-orders');
            receivedSectionPlace.appendChild(div);

            Object.values(input).forEach(i=>i.value = '');


            // start/finish functionality
            startBtn.addEventListener('click', onStart);
            finishBtn.addEventListener('click', onFinish);

            function onStart(){
                startBtn.disabled = true;
                finishBtn.disabled = false;
            }

            function onFinish(e){
                startBtn.remove();
                finishBtn.remove();
                let completedSectionPlace = document.querySelector('section#completed-orders');
                completedSectionPlace.appendChild(div);
            }

            // clear functionality
            let clearBtn = document.querySelector('button.clear-btn');
            clearBtn.addEventListener('click', clear)

            function clear(){
                
                let containers = completedSectionPlace.querySelectorAll('.container');
                Array.from(containers).forEach(container => container.remove())
            }
        }
        
        
    }
    function createElement(type, content, className, dis){
        const element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }
        if (dis){
            element.disabled = true;
        }
        return element;
    }
}