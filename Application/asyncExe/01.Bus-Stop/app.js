async function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const list = document.querySelector('ul#buses');

    try {
        stopName.textContent = '';
        list.textContent = '';

        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
        if(response.ok == false){
            stopName.textContent = 'Error';
        }
        const data = await response.json();

        stopName.textContent = data.name;
        const buses = data.buses;
        for (let bus in buses){
            let li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
            list.appendChild(li);
        } 
    } catch (error) {
        stopName.textContent = 'Error'
    }
    
   
}