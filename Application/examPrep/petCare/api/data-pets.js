import * as api from "./api.js";

// DATA MODULE for dashboard, details, edit, delete, create
// to organise fetching data


// let pageSize = 2;

let endpoints = {
    byId: '/data/pets/',
    // create: "/data/recipes",
    // count: "/data/recipes?count",
    // recent: '/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3',
    pets: `/data/pets?sortBy=_createdOn%20desc&distinct=name`,
}

export async function getAll() {
    return await api.get(endpoints.pets)
}

export async function getById(id) {
    return api.get(endpoints.byId + id);
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

// export async function create(data) {
//     return api.post(endpoints.create, data)
// }