function toggle() {
    let m = document.getElementsByClassName('button')[0];
    let extra = document.getElementById('extra');
    if (extra.style.display === 'none'){
        extra.style.display = 'block';
        m.textContent = 'Less'
    } else if (extra.style.display = 'block'){
        extra.style.display = 'none';
        m.textContent = 'More' 
    }
}
// HTMLCollection is a collection, thus, you have to index the children, here => [0] button