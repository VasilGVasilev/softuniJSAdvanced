import * as api from "./api.js";

// DATA MODULE for dashboard, details, edit, delete, create
// to organise fetching data


// disapproving of ownIdFirst and ownIdSecond but working for the exam

let endpoints = {
    byId: '/data/memes/',
    // count: "/data/recipes?count",
    // recent: '/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3',
    memes: `/data/memes?sortBy=_createdOn%20desc`
}

export async function getAll() {
    return api.get(endpoints.memes)
}

export async function getById(id) {
    return api.get(endpoints.byId + id);
}

export async function putById(id, data) {
    return api.put(endpoints.byId + id, data);
}

export async function create(data) {
    return api.post(endpoints.byId, data)
}


// export async function getRecent() {
//     return api.get(endpoints.recent)
// }


// export async function getAll(page = 1) {
//     const recipes, count] = await Promise.all([
//         api.get(endpoints.recipes + (page - 1) * pageSize),
//         api.get(endpoints.count)
//     ]);

//     return {
//         recipes,
//         pages: Math.ceil(count / pageSize)
//     }
// }
