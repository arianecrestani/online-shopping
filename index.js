"use strict"

const baseUrl = (endpoint) => {
   const mainUrl= 'https://fakestoreapi.com'
   return `${mainUrl}/${endpoint}`
}
const apiRequest = async (endpoint) => {
    return await fetch(baseUrl(endpoint))
      .then((response) => response.json())
      .catch((error) => console.log(error));
};

const getProducts = () => `products?limit=10`;
const getSalesProducts = () => `products?sort=desc`;


const btnEventHandler = () => {
    apiRequest(getProducts()).then((json) => updateUi(json));
};
const btnSalesProducts = () => {
    apiRequest(getSalesProducts()).then((json) => updateUi(json));
};



function updateUi(json) {
    const result = json
    for (let i= 0; i < result.length; i++){
        let divElement = document.createElement("div");
        divElement.textContent = 
            'title:' + result[i].title
            +'price:' + result[i].price;
            +'description:' + result[i].description;
            +'rating:' + result[i].rating;
            +'image:' + result[i].image;
        document.body.appendChild(divElement)
      
    }
} 



