function extract(content) {
    let text = document.getElementById('content').textContent;
    let arr = [];
    let parse = false;
    let word = '';
    for (let i = 0; i < text.length; i++){
        
        if(text[i] === ')'){
            parse = false;
            console.log(word);
            arr.push(word);
            word = '';
        }
        if(parse){
            word += text[i];
        }
        if(text[i] === '('){
            parse = true;
        }
        
        
    }
    return arr.join('; ');
}
