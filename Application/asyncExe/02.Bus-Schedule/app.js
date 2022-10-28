function solve() {
    let arriveBtn = document.getElementById('arrive');
    let departBtn = document.getElementById('depart');
    let infoSpan = document.querySelector('.info');
    let nextStopId = 'depot';
    let currentStop = '';
    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
            .then(res=>res.json())
            .then(data=>{
                infoSpan.textContent = 'Next stop ' + data.name;
                nextStopId = data.next;
                currentStop = data.name;
            })

        arriveBtn.disabled=false;
        departBtn.disabled=true;
    }

    function arrive() {
        infoSpan.textContent = 'Arriving at ' + currentStop;

        arriveBtn.disabled=true;
        departBtn.disabled=false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();