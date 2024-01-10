function solve() {
    const divInfo = document.getElementById('info');
    const spanInfo = divInfo.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let currNameOfNextStop = '';

    async function depart() {
        try {
            const response = await fetch('http://localhost:3030/jsonstore/bus/schedule/depot');
            const currStopObject = await response.json();

            currNameOfNextStop = currStopObject.name;
            spanInfo.textContent = `Next stop ${currNameOfNextStop}`;
    
            arriveBtn.disabled = false;
            departBtn.disabled = true;
        }catch{
            spanInfo.textContent = `Error`;
        }

       
    }

    function arrive() {
        spanInfo.textContent = `Arriving at ${currNameOfNextStop}`;

        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();