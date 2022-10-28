async function attachEvents() {
    let inputElement = document.getElementById('location').value;
    let submitBtn = document.getElementById('submit');
    let divDisplay = document.getElementById('forecast');
    let currentDiv = document.getElementById('current');
    let upcomingDiv = document.getElementById('upcoming');
    let sunny = '&#x2600';
    let partlySunny = '&#x26C5';
    let overcast = '&#x2601';
    let rain = '&#x2614';
    let degrees = '&#176';

    let divElementUpcoming = document.createElement('div');
    let divElementCurrent = document.createElement('div');

    submitBtn.addEventListener('click', submit)
    async function submit(){
        try {
            divElementCurrent.innerHTML = '';
            divElementUpcoming.innerHTML = '';

            divElementUpcoming.setAttribute('class', 'forecaset-info');
            divElementCurrent.setAttribute('class', 'forecasts');


            divDisplay.style.display = 'inline';

            let response = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            let data = await response.json();
            console.log(data);
            let cityFound = data.find(e => e.name === inputElement);
            console.log(cityFound);
            let currentConditionRes = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityFound.code}`);
            let currentConditionData = await currentConditionRes.json();
            console.log(currentConditionData);

            let spanGroup = document.createElement('span');
            let conditionSpan = document.createElement('span');
            let temperatureSpan = document.createElement('span');
            let locationSpan = document.createElement('span');
            let spanWithIcon = document.createElement('span');

            spanWithIcon.setAttribute('class', 'condition symbol');
            spanGroup.setAttribute('class', 'condition');
            locationSpan.setAttribute('class', 'forecast-data');
            temperatureSpan.setAttribute('class', 'forecast-data');
            conditionSpan.setAttribute('class', 'forecast-data');

            locationSpan.textContent = currentConditionData.name;
            temperatureSpan.innerHTML = `${currentConditionData.forecast.low}${degrees}/${currentConditionData.forecast.high}${degrees}`;
            conditionSpan.textContent = currentConditionData.forecast.condition;
            let condition = currentConditionData.forecast.condition;

            if(condition == 'Sunny'){
                spanWithIcon.innerHTML = sunny;
            } else if(condition == 'Partly sunny'){
                spanWithIcon.innerHTML = partlySunny;
            } else if(condition == 'Overcast'){
                spanWithIcon.innerHTML = overcast;
            } else if(condition == 'Rain'){
                spanWithIcon.innerHTML = rain;
            }

            spanGroup.appendChild(locationSpan);
            spanGroup.appendChild(temperatureSpan);
            spanGroup.appendChild(conditionSpan);
            divElementCurrent.appendChild(spanWithIcon);
            divElementCurrent.appendChild(spanGroup);

            currentDiv.appendChild(divElementCurrent);

            let threeDaysConditionRes = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${cityFound.code}`);
            let threeDaysConditionData = await threeDaysConditionRes.json();
            console.log(threeDaysConditionData);

            let nextDays = threeDaysConditionData.forecast;
            nextDays.forEach(x=>{
                let spanGroup = document.createElement('span');
                let conditionSpan = document.createElement('span');
                let temperatureSpan = document.createElement('span');
                let locationSpan = document.createElement('span');
                let spanWithIcon = document.createElement('span');

                spanWithIcon.setAttribute('class', 'condition symbol');
                spanGroup.setAttribute('class', 'condition');
                locationSpan.setAttribute('class', 'forecast-data');
                temperatureSpan.setAttribute('class', 'forecast-data');
                conditionSpan.setAttribute('class', 'forecast-data');

                locationSpan.textContent = x.name;
                temperatureSpan.innerHTML = `${x.low}${degrees}/${x.high}${degrees}`;
                conditionSpan.textContent = x.condition;
                let condition = x.condition;

                if(condition == 'Sunny'){
                    spanWithIcon.innerHTML = sunny;
                } else if(condition == 'Partly sunny'){
                    spanWithIcon.innerHTML = partlySunny;
                } else if(condition == 'Overcast'){
                    spanWithIcon.innerHTML = overcast;
                } else if(condition == 'Rain'){
                    spanWithIcon.innerHTML = rain;
                }

                spanGroup.appendChild(locationSpan);
                spanGroup.appendChild(temperatureSpan);
                spanGroup.appendChild(conditionSpan);
                divElementUpcoming.appendChild(spanWithIcon);
                divElementUpcoming.appendChild(spanGroup);

                upcomingDiv.appendChild(divElementUpcoming);
            })

            

            
        } catch (error) {
            divDisplay.textContent = 'Error'
        }
    }
    
}

attachEvents();