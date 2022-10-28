// function solve() {
//     let arriveBtn = document.getElementById('arrive');
//     let departBtn = document.getElementById('depart');
//     let infoSpan = document.querySelector('.info');
//     let nextStopId = 'depot';
//     let currentStop = '';
//     function depart() {
//         fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
//             .then(res=>res.json())
//             .then(data=>{
//                 infoSpan.textContent = 'Next stop ' + data.name;
//                 nextStopId = data.next;
//                 currentStop = data.name;
//             })

//         arriveBtn.disabled=false;
//         departBtn.disabled=true;
//     }

//     function arrive() {
//         infoSpan.textContent = 'Arriving at ' + currentStop;

//         arriveBtn.disabled=true;
//         departBtn.disabled=false;
//     }

//     return {
//         depart,
//         arrive
//     };
// }

// or with obj, but note that you object are copied by reference
function solve() {
    let arriveBtn = document.getElementById('arrive');
    let departBtn = document.getElementById('depart');
    let infoSpan = document.querySelector('.info');
    let busStop = {
        next: 'depot',
    }
    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`)
            .then(res=>res.json())
            .then(data=>{
                // save in object like that so that:
                // a new reference to a new obj
                // and not a new reference to same obj
                busStop = JSON.parse(JSON.stringify(data)); //or Object.assign()
                infoSpan.textContent = 'Next stop ' + busStop.name;
                
            })

        arriveBtn.disabled=false;
        departBtn.disabled=true;
    }

    function arrive() {
        infoSpan.textContent = 'Arriving at ' + busStop.name;

        arriveBtn.disabled=true;
        departBtn.disabled=false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();