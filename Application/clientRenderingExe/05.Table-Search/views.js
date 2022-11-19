import { html } from '../../node_modules/lit-html/lit-html.js'

export const trTemplate = (data) => html 
`<tr id="${data._id}">
    <td>${data.firstName} ${data.lastName}</td>
    <td>${data.email}</td>
    <td>${data.course}</td>
</tr>`