window.addEventListener("load", solve);

function solve() {
  
  const titleInput = document.getElementById("post-title");
  const categoryInput = document.getElementById("post-category");
  const contentInput = document.getElementById("post-content");

  const reviewUl = document.getElementById("review-list");
  const publishedUl = document.getElementById("published-list");


  const publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', publishFunc)

  const clearBtn = document.getElementById('clear-btn');

  function publishFunc(e){
    e.preventDefault();
    if(titleInput.value == '' || categoryInput.value == '' || contentInput.value == ''){
      return;
    }
      
    let liEl = document.createElement('li');
    liEl.className = 'rpost';

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = titleInput.value;
    article.appendChild(h4);
    let p1 = document.createElement('p');
    p1.textContent = 'Category: ' + categoryInput.value;
    article.appendChild(p1);
    let p2 = document.createElement('p');
    p2.textContent = 'Content: ' + contentInput.value;
    article.appendChild(p2);
    liEl.appendChild(article);

      

    let approveBtn = document.createElement('button');
    approveBtn.className = 'action-btn approve';
    approveBtn.textContent = 'Approve';
    liEl.appendChild(approveBtn);

    let editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'Edit';
    liEl.appendChild(editBtn);

    reviewUl.appendChild(liEl);

    titleInput.value = '';
    categoryInput.value = '';
    contentInput.value = '';
      
    editBtn.addEventListener('click', editFunc);
    function editFunc(){
      titleInput.value = h4.textContent;
      categoryInput.value = p1.textContent.substring(10);
      contentInput.value = p2.textContent.substring(9);
      liEl.remove();
      }

    approveBtn.addEventListener('click', approveFunc);
    function approveFunc(){
      publishedUl.appendChild(liEl);
      editBtn.remove();
      approveBtn.remove();  
    }

      
    clearBtn.addEventListener('click', clearFunc)
    function clearFunc(){
      publishedUl.innerHTML = '';
       
    } 
  }
}
