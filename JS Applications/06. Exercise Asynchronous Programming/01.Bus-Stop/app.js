async function getInfo() {
    const stopNameInputEl = document.getElementById('stopId');
    const ulWithBuses = document.getElementById('buses');
    const divStopName = document.getElementById('stopName');

    function clearAll() {
        ulWithBuses.textContent = '';
        divStopName.textContent = '';
    }
    clearAll();

    try {
        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopNameInputEl.value}`);
        const jsonResponse = await response.json();
        
        const stopName = jsonResponse.name;
        divStopName.textContent = `${stopName}`;

        for (const key of Object.keys(jsonResponse.buses)) {

            const busId = key;
            const arrivalTime = jsonResponse.buses[key];

            const newLi = document.createElement('li');
            newLi.textContent = `Bus ${busId} arrives in ${arrivalTime} minutes`;

            ulWithBuses.appendChild(newLi);
        }
    } catch (error) {
        divStopName.textContent = 'Error';
    }

    // const p = fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopNameInputEl.value}`);
    // p
    //     .then((data) => data.json())
    //     .then((response) => getAndAppendInfoToDOM(response))
    //     .catch((error) => divStopName.textContent = 'Error');

    // function getAndAppendInfoToDOM(jsonResponse) {
    //     const stopName = jsonResponse.name;
    //     divStopName.textContent = `${stopName}`;

    //     for (const key of Object.keys(jsonResponse.buses)) {

    //         const busId = key;
    //         const arrivalTime = jsonResponse.buses[key];

    //         const newLi = document.createElement('li');
    //         newLi.textContent = `Bus ${busId} arrives in ${arrivalTime} minutes`;

    //         ulWithBuses.appendChild(newLi);
    //     }
    // }
    // console.log(p);
}