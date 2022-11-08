import { showHome } from './home.js'

document.getElementById('homeLink').addEventListener('click', showHome)

// start application in home view but initially no event clicked: solution -> ev && ev.preventDefault();

showHome();