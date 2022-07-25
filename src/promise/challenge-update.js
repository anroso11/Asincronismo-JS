import fetch from "node-fetch";
const API = 'http://api.escuelajs.co/api/v1';

function putData(urlApi,data) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'corse',
        credentials: 'same-origin',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "Heavy Metal Amazon DVD",
    "price": 30
}

putData(`${API}/products/222`,data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));