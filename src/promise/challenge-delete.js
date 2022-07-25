import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function deleteData (urlApi, data){
    const response = fetch(urlApi, {
       method: 'DELETE',
       mode: 'cors', 
       credentials: 'same-origin',
       headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
    });
    return response;
}


deleteData(`${API}/products/222`)
    .then(response => response.json())
    .then(data => console.log(data))
    .finally(()=> console.log('Finally Delete'));
