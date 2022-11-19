export async function api() {
    let res = await fetch('http://localhost:3030/jsonstore/advanced/table');
    let data = res.json();
    return data;
}