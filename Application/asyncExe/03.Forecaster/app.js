async function attachEvents() {
    let input = document.getElementById('location').value;
    let submitBtn = document.getElementById('submit');
    let forecastDiv = document.getElementById('forecast');
    let currentDiv = document.getElementById('current');
    let upcomingDiv = document.getElementById('upcoming');
    submitBtn.addEventListener('click', submit)
    async function submit(){
        try {
            let response = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            let data = await response.json();
            console.log(data);
            let cityFound = data.find(e => e.name === input);
            
            let currentConditionRes = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityFound.code}`);
            let currentConditionData = await currentConditionRes.json();
            console.log(currentConditionData);

            let threeDaysConditionRes = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityFound.code}`);
            let threeDaysConditionData = await threeDaysConditionRes.json();
            console.log(threeDaysConditionData);

            forecastDiv.style.display = 'block';

            
        } catch (error) {
            
        }
    }
    
}

attachEvents();