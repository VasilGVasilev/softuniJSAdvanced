window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let storyTitle = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let storyText = document.getElementById('story');

  let preview = document.getElementById("preview-list");
  // let publishedUl = document.getElementById("published-list");

  let publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', publishFunc)

  function publishFunc(e){
    e.preventDefault();
    if(firstName.value == '' || lastName.value == '' || age.value == '' || storyTitle.value == '' || genre.value == '' || storyText.value == ''){
      return;
    }
    let li = document.createElement('li');
    li.className = 'story-info';

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = 'Name: ' + firstName.value + ' ' + lastName.value;
    article.appendChild(h4);
    let p1 = document.createElement('p');
    p1.textContent = 'Age: ' + age.value;
    article.appendChild(p1);
    let p2 = document.createElement('p');
    p2.textContent = 'Title: ' + storyTitle.value;
    article.appendChild(p2);
    let p3 = document.createElement('p');
    p3.textContent = 'Genre: ' + genre.value;
    article.appendChild(p3);
    let p4 = document.createElement('p');
    p4.textContent = storyText.value;
    article.appendChild(p4);
    li.appendChild(article);

      

    let saveBtn = document.createElement('button');
    saveBtn.className = 'save-btn';
    saveBtn.textContent = 'Save Story';
    li.appendChild(saveBtn);

    let editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit Story';
    li.appendChild(editBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete Story';
    li.appendChild(deleteBtn);

    preview.appendChild(li);

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    genre.value = '';
    storyText.value = '';

    publishBtn.disabled = true;

    editBtn.addEventListener('click', editFunc);
    function editFunc(){
      let name = h4.textContent.substring(6).split(' ');
      firstName.value = name[0];
      lastName.value = name[1]
      age.value = p1.textContent.substring(5);
      storyTitle.value = p2.textContent.substring(7);
      genre.value = p3.textContent.substring(7);
      storyText.value = p4.textContent;

      publishBtn.disabled = false;
      deleteBtn.disabled = true;
      editBtn.disabled = true;
      deleteBtn.disabled = true;

      li.remove();
    }

    saveBtn.addEventListener('click', saveFunc);
    function saveFunc(){
      let mainDiv = document.getElementById('main');
      mainDiv.innerHTML = '';
      let h1 = document.createElement('h1');
      h1.textContent = 'Your story is saved!';
      mainDiv.appendChild(h1);
    }

    deleteBtn.addEventListener('click', deleteFunc);
    function deleteFunc(){
      li.remove();
      publishBtn.disabled = false;
    }
  }
}
