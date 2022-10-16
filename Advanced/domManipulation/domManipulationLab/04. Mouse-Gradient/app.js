function attachGradientEvents() {
    let result = document.querySelector('div#result');
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMouse);
    function onMouse(e){
        result.textContent = `${Math.floor(e.offsetX / gradient.clientWidth * 100)}%`
    }
}

// The whole idea behind events is that 
// addEventListener() method attaches an event handler 
// to the specified element.
// it attaches the listener to an element and
// depending on the event type performed a cb function is executed
// an easy way to access the attached element is putting in
// the cb function the parameter event
//  someFunction (event){
//     event.target.textContent = newValue;
// } 
// the event.target points to the relevant element,
// it literally is targeting it and by modifying its textContent
// property, you modify the element on which the event handler is attached
// notice the reference as a crucial relationship between element and event.target