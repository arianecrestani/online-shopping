"use strict"

async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products')
    const result = await response.json();
    for (let i= 0; i < result.length; i++){
        let divElement = document.createElement("div");
        divElement.textContent = 
            'title:' + result[i].title
            +'price:' + result[i].price;
            +'description:' + result[i].description;
            +'rating:' + result[i].rating;
        document.body.appendChild(divElement)
      
    }
} 
getProducts()

