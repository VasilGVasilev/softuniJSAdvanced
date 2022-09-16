function colorize() {
    let even = Array.from(document.querySelectorAll('tr'));
    let index = 0;
    for (let i of even){
        index++;
        if (index % 2 == 0){
            i.style.background = 'teal'
        }
    }
}