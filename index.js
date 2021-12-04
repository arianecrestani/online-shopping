"use strict"

const btnEventHandler = () => {
    apiRequest(getProducts())
        .then((json) => updateUi(json));
};
const btnSalesProducts = () => {
    apiRequest(getSalesProducts())
        .then((json) => updateUi(json));
};

const createTitle = (title) => {
    const titleDiv = document.createElement("div");
    titleDiv.id = "titleProduct";
    titleDiv.innerHTML = title;
  
    return titleDiv;
};
const createImage = (image) => {
    const imageDiv = document.createElement("div");
    imageDiv.id = "imageProduct";
    imageDiv.innerHTML = `<img src="https://fakestoreapi.com/img/${image}"/>`;
    return imageDiv;
};
const createDescription = (description) => {
    const descriptionDiv = document.createElement("div");
    descriptionDiv.id = "descriptionProduct";
    descriptionDiv.innerHTML = description;
  
    return descriptionDiv;
};
const createPrice = (price) => {
    const priceDiv = document.createElement("div");
    priceDiv.id = "priceProduct";
    priceDiv.innerHTML = price;
  
    return priceDiv;
};
const createRating = (rating) => {
    const ratingDiv = document.createElement("div");
    ratingDiv.id = "ratingProduct";
    ratingDiv.innerHTML = rating;
  
    return ratingDiv;
};

const createProductSection = (result) => {
    const div = document.createElement("div");
    div.id = "productSection";
  
    const title = createTitle(result.title);
    div.appendChild(title);
  
    const image = createImage(result.image);
    image.src = result.image;
    div.appendChild(image);
  
    const description = createDescription(result.description);
    div.appendChild(description);
  
    const price = createPrice(result.price);
    div.appendChild(price);
  
    const rating = createRating(result.rating);
    div.appendChild(rating);
  
    return div;
  };

function updateUi(json) {

    const products = document.getElementById('products')
    products.innerHTML= '';

    const result = json
    for (let i= 0; i < result.length; i++){
        
      const divElement = {
            title: result[i].title,
            image: result[i].image,
            description: result[i].description,
            price: result[i].price,
            rating: result[i].rating.rate,
        }

        const productDiv = createProductSection(divElement);
        products.appendChild(productDiv)
      
    }
} 



