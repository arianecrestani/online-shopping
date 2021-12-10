"use strict"

/* Function called by event */
//const singleProduct = async () => { const json = await apiRequest(...); updateUiItem(json); }

const loading = () => {
    apiRequest(getProducts())// function called by endpoint
        .then((json) => updateUi(json));//return updateUi in json
};

const btnSalesProducts = () => {
    apiRequest(getSalesProducts())
        .then((json) => updateUi(json));
};

const btnEletroProducts = () => {
    apiRequest(getEletroProducts())
        .then((json) => updateUi(json));
}

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


const createProductSection = (product) => {


    const div = document.createElement("div");
    div.id = "productSection";

    const span = document.createElement('span')
    div.appendChild(span)

    const btnDetails = document.createElement('a')
    btnDetails.innerText = "Product Details"
    btnDetails.href = `./productDetailPage.html?productId=${product.id}`
    btnDetails.className = 'seeDetailBtn'
    span.appendChild(btnDetails)

    const iconHeart = document.createElement('a')
    iconHeart.href = "#"
    iconHeart.className = 'far fa-heart'
    iconHeart.id = 'iconHeart'
    span.appendChild(iconHeart)
    
    const image = createImage(product.image);
    div.appendChild(image);

    const title = createTitle(product.title);
    div.appendChild(title);

    // const description = createDescription(result.description);
    // div.appendChild(description); // description going to another page (productDetail)

    const price = createPrice(product.price);
    div.appendChild(price);

    const rating = createRating(product.rating);
    div.appendChild(rating);

    return div;
};

const updateUi = (products) => {

    const productsListDiv = document.getElementById('products')//there are a div in html
    productsListDiv.innerHTML = ''


    products.forEach(product => {
        const divElement = {
            title: product.title,
            image: product.image,
            price: "$" + product.price,
            rating: product.rating.rate,
        }
        const productDiv = createProductSection(divElement);
        productsListDiv.appendChild(productDiv)


    });
}



