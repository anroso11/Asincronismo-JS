import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData (urlApi, data){
    const response = fetch(urlApi, {
       method: 'POST',
       mode: 'cors', 
       credentials: 'same-origin',
       headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
    });
    return response;
}

const data = {
  "title": "Heavy Metal DVD",
  "price": 20,
  "description": "Del fabuloso cómic de culto de ciencia-ficción, llega Heavy Metal, una experiencia única. La película combina tres elementos: fantásticos efectos visuales, una fabulosa animación y una extraordinaria banda sonora. Una misteriosa bola verde nos transporta mágicamente a través de una serie de aventuras en el pasado el futuro, y el más allá.",
  "categoryId": 5,
  "images": ["https://m.media-amazon.com/images/I/81dVSahT+YL._SL1220_.jpg"]
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));
