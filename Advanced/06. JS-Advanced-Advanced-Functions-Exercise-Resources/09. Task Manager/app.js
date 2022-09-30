function solve() {
    const input = {
        name: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    };
    const [_, openSection, progressSection, finishedSection] =  Array.from(document.querySelectorAll('section')).map(e=>e.children[1]);
    document.getElementById('add').addEventListener('click', addTask);

    function addTask(event){
        event.preventDefault();
        // collect field values() 
        // see input obj

        // create elements
        const article = document.createElement('article');
        article.appendChild(createElement('h3', input.name.value));
        article.appendChild(createElement('p', `Description: ${input.description.value}`));
        article.appendChild(createElement('p', `Due Date: ${input.date.value}`));
        const div = createElement('div', '', 'flex');
        
        const startButton = createElement('button', 'Start', `green`);
        const deleteButton = createElement('button', 'Delete', `red`);
        const finishedButton = createElement('button', 'Finish', `orange`);
        
        div.appendChild(startButton);
        div.appendChild(deleteButton);
        
        article.appendChild(div);
        // append to Open section
        openSection.appendChild(article);
        
        Object.values(input).forEach(i=>i.value = '');

        // **add functionality for start, finish, delete task
        startButton.addEventListener('click', onStart);
        deleteButton.addEventListener('click', onDelete);
        finishedButton.addEventListener('click', onFinish);

        function onDelete(){
            article.remove();
        }

        function onStart(){
            startButton.remove();
            div.appendChild(finishedButton);
            // every reference to the location of a DOM element is 
            // fixed in place if you add it to another section
            // it will be automatically removed from the section it was
            progressSection.appendChild(article);
        }

        function onFinish(){
            div.remove();
            finishedSection.appendChild(article);
        }
    }

    function createElement(type, content, className){
        const element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }
        return element;
    }
}