import { html, render } from '../node_modules/lit-html/lit-html.js';

const getweatherBtn = document.getElementById('submit');
const inputEl = document.getElementById('location');
const divForecast = document.getElementById('forecast');
const divCurrent = document.getElementById('current');
const divUpcoming = document.getElementById('upcoming');

function attachEvents() {
    getweatherBtn.addEventListener('click', onClick)
}

async function onClick(e) {
    divForecast.style.display = 'block';

    try {
        const response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
        const responseData = await response.json();

        const currLocation = inputEl.value;
        const locationObject = responseData.filter((el) => el.name == currLocation);
        const code = locationObject[0].code;

        const responseForTodaysForecast = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
        const currentConditions = await responseForTodaysForecast.json();


        const responseForUpcomigForecast = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
        const upcomingConditions = await responseForUpcomigForecast.json();

        render(createCurrentTemplate(currentConditions), divCurrent);

        render(createUpcomingTemplate(upcomingConditions), divUpcoming);


    } catch (err) {
        console.log(err);
        divForecast.textContent = 'Error';
    }


}

attachEvents();

function createCurrentTemplate(object) {
    return html`
    <div class="forecasts">
     <span class="condition symbol">${createSymbol(object.forecast.condition)}</span>
     <span class="condition">
        <span class="forecast-data">${object.name}</span>
        <span class="forecast-data">${object.forecast.low}&#176/${object.forecast.high}&#176</span>
        <span class="forecast-data">${object.forecast.condition}</span>
     </span>
   </div>
    `
}

function createUpcomingTemplate(object) {
    return html`
    <div class="forecast-info">
         ${object.forecast.map(element =>
        createSingleUpcomingElement(element))}
    </div>
    `;
}

function createSymbol(condition) {

    switch (condition) {
        case 'Sunny':
            return html`&#x2600`;
        case 'Partly sunny':
            return html`&#x26C5`;
        case 'Overcast':
            return html`&#x2601`;
        case 'Rain':
            return html`&#x2614`;
    }
}

function createSingleUpcomingElement(object) {
    return html`
    <span class="upcoming">
                        <span class="symbol">${createSymbol(object.condition)}</span>
                        <span class="forecast-data">${object.low}&#176/${object.high}&#176</span>
                        <span class="forecast-data">${object.condition}</span>
                    </span>
    `
}