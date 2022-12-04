import * as api from "./api.js";

// DATA MODULE for dashboard, details, edit, delete, create
// to organise fetching data


// disapproving of ownIdFirst and ownIdSecond but working for the exam

let endpoints = {
    byId: '/data/albums', //note the difference between create needing /data/albums and details needing /data/albums/
    albums: `/data/albums?sortBy=_createdOn%20desc`,
    likes: '/data/likes',
    albumLikes: (albumId) => `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
    liked: (albumId, userId) => `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function getMyalbums(id) {
    return api.get(endpoints.myalbums(id))
}

export async function getAll() {
    return api.get(endpoints.albums)
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

export async function getLikes(albumId) {
    return api.get(endpoints.albumLikes(albumId));
    
}

export async function postLike(albumId){
    return api.post(endpoints.likes, albumId)
}

export async function liked(albumId, userId){
    return api.get(endpoints.liked(albumId, userId))
}
