function editElement(reference, match, replacer) {
    // replace repalces once, so use RegEx to replace all instances
    // let str = reference.textContent;
    // let pattern = new RegExp(match, 'g');
    // let result = str.replace(pattern, replacer);
    // reference.textContent = result;
    let str = reference.textContent;
    let result = str.split(match).join(replacer);
    reference.textContent = result;
}