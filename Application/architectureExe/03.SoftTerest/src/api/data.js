import * as api from './api.js';

const endopoints = {
    'ideas': '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'create': '/data/ideas'
}

export async function getAllIdeas(){
    return api.get(endopoints.ideas);
}

export async function createIdea(ideaData){
    return api.post(endopoints.create, ideaData);
}