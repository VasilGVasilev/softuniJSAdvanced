import * as api from "./api.js";

// DATA MODULE for dashboard, details, edit, delete, create
// to organise fetching data


// disapproving of ownIdFirst and ownIdSecond but working for the exam

let endpoints = {
    byId: '/data/books', //note the difference between create needing /data/books and details needing /data/books/
    // count: "/data/recipes?count",
    // recent: '/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3',
    books: `/data/books?sortBy=_createdOn%20desc`,
    likes: '/data/likes',
    bookLikes: (bookId) => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
    mybooks: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`, // follow instructions closely!!!
    liked: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function getMyBooks(id) {
    return api.get(endpoints.mybooks(id))
}

export async function getAll() {
    return api.get(endpoints.books)
}

export async function getById(id) {
    return api.get(endpoints.byId + '/' + id);
}

export async function putById(id, data) {
    return api.put(endpoints.byId + '/' + id, data);
}

export async function create(data) {
    return api.post(endpoints.byId, data)
}

export async function getLikes(bookId) {
    return api.get(endpoints.bookLikes(bookId));
    
}

export async function postLike(bookId){
    return api.post(endpoints.likes, bookId)
}

export async function liked(bookId, userId){
    return api.get(endpoints.liked(bookId, userId))
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