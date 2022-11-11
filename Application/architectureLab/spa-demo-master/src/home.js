import { render } from "./domRender.js";

const section = document.getElementById('homeView');
section.remove();

export function showHome() {
    render(section);
}