"use strict"

const loading = () => {
    apiRequest(getProducts())
        .then((json) => updateUi(json));
};

const btnSalesProducts = () => {
    apiRequest(getSalesProducts())
        .then((json) => updateUi(json));
};

const createImage = (image) => {
    const imageDiv = document.createElement("div");
    imageDiv.id = "imageProduct";
    imageDiv.innerHTML = `<img src="${image}"/>`;
    return imageDiv;
};

const createTitle = (title) => {
    const titleDiv = document.createElement("div");
    titleDiv.id = "titleProduct";
    titleDiv.innerHTML = title;
  
    return titleDiv;
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



const createProductSection = (products) => {


    const div = document.createElement("div");
    div.id = "productSection";

    const icon = document.createElement('span')
    div.appendChild(icon)

    const iconHeart = document.createElement('a')
    iconHeart.href = "#"
    iconHeart.className = 'far fa-heart'
    iconHeart.id = 'iconHeart'
    icon.appendChild(iconHeart)

    const image = createImage(products.image);
    div.appendChild(image);
  
    const title = createTitle(products.title);
    div.appendChild(title);
    
    // const description = createDescription(result.description);
    // div.appendChild(description); // description going to another page (productDetail)
  
    const price = createPrice(products.price);
    div.appendChild(price);
  
    const rating = createRating(products.rating);
    div.appendChild(rating);

    return div;
};

const updateUi = (products) => {

    const productsListDiv = document.getElementById('products')
    productsListDiv.innerHTML= ''


    products.forEach(product => {
        const divElement = {
            title: product.title,
            image: product.image,
            // description: product.description,
            price: product.price,
            rating: product.rating.rate,
        }
        const productDiv = createProductSection(divElement);
        productsListDiv.appendChild(productDiv) 

     
    });
}
 



