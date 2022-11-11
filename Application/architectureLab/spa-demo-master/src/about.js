import { render } from './domRender.js'

const section = document.getElementById('aboutView');
section.remove();

export function showAbout(){
    render(section);
}
