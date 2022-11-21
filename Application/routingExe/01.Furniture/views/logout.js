import page from '../node_modules/page/page.mjs';
import { updateInfo } from '../app.js';

export const logout = () => {
    fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers:{
            'X-Authorization': localStorage.token
        }
    }).then(res=>{
        if(res.status == 204){
            return res;
        } else {
            return res.json()
        }
    })

    localStorage.clear();
    updateInfo()
    page.redirect('/catalog')
}