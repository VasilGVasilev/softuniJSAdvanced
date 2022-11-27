import * as api from "./api.js";

export async function donate(petId){
    let endpoint = `/data/donation`
    return await api.post(endpoint, {petId});
}

export async function getDonations(petId){
    let endpoint = `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`
    return await api.get(endpoint);
}

export async function getOwnDonation(petId, userId){
    let endpoint = `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
    return  await api.get(endpoint);
}
