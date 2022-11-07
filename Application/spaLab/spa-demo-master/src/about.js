const section = document.getElementById('aboutView'); //store div section#aboutView in section variable
section.remove(); //remove section from DOM in the div section BUT STILL STORED IN VARIABLE!

export function showAbout() {
    document.querySelector('main').replaceChildren(section);
    // console.log(typeof section); >> object   because it a stored object in variable
    console.log(section);
}