export function getUserData() {
    return JSON.parse(localStorage.getItem('user'))
}

export function getAccessToken() {
    let user = getUserData();
    if(user) {
        return user.accessToken;
    } else {
        return null;
    }
}

export function clearUserData() {
    localStorage.removeItem('user')
}

export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data))
}

// reason for this pure function -> reusability
// it accepts args and returns them with an anonomouys function
// so when this pure func is called you have to put () after it
// so that it does not return the function definition of the anonymous function
// rather execute it(event.preventDefault) and return the formData and handler func

// a layer of abstraction that does preventDefault and collects formData
// puts them in a as args of a new handler func that will be
// onSubmit but with (ctx, formData, event) as args instead of just (event)
export function createSubmitHandler(ctx, handler) {
    return function (event) {
        event.preventDefault()
        // let m = new FormData(event.target)
        // console.log(m);
        // >> FormData { email → "peter@abv.bg", password → "123456" 
        // thus => Object.fromEntries()
        let formData = Object.fromEntries(new FormData(event.target))
        handler(ctx, formData, event)
    }
}