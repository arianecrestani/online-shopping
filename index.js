"use strict"
/* Function called by event */
//const singleProduct = async () => { const json = await apiRequest(...); updateUiItem(json); }

const loading = () => {
    apiRequest(getProducts())// function called by endpoint
        .then((json) => updateUi(json));//return updateUi in json
};

const btnEletroProducts = () => {
      apiRequest(getEletroProducts())
     .then((json) => updateUi(json));
}
const btnJewerelyProducts = () => {
    apiRequest(getJewerelyProducts())
    .then((json) => updateUi(json));
}

const btnMensProducts = () => {
    apiRequest(getMensProducts())
    .then((json) => updateUi(json));
}

const btnWomenProducts = () => {
    apiRequest(getWomenProducts())
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
// const createDescription = (description) => {
//     const descriptionDiv = document.createElement("div");
//     descriptionDiv.id = "descriptionProduct";
//     descriptionDiv.innerHTML = description;

//     return descriptionDiv;
// };

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
    btnDetails.href = `./productDetail.html?productId=${product.id}`
    btnDetails.className = 'seeDetailBtn'
    span.appendChild(btnDetails)

    const iconHeart = document.createElement('a')
    iconHeart.href = "#"
    iconHeart.className = 'far fa-heart'
    iconHeart.id = 'iconHeart'
    iconHeart.product = product
    iconHeart.addEventListener("click", addFavoriteItem) //save to favorite
    span.appendChild(iconHeart)

    const iconCart = document.createElement('a')
    iconCart.href = "#"
    iconCart.className = 'fas fa-cart-plus'
    iconCart.id = 'iconCart'
    span.appendChild(iconCart)
    
    const image = createImage(product.image);
    div.appendChild(image);

    const title = createTitle(product.title);
    div.appendChild(title);

    // const description = createDescription(result.description);
    // div.appendChild(description); // description going to another page (productDetail)

    const price = createPrice(product.price);
    div.appendChild(price);

    const divRating = document.createElement('div') 
    divRating.id = 'iconStar'
    div.appendChild(divRating)

    const rating = createRating(product.rating);
    rating.id='iconStar'
    divRating.appendChild(rating);

    const iconStar = document.createElement('a')
    iconStar.href = "#"
    iconStar.id = 'iconStar'
    iconStar.className = 'fas fa-star'
    divRating.appendChild(iconStar)

    return div;
};

const updateUi = (products) => {

    const productsListDiv = document.getElementById('products')//there are a div in html
    productsListDiv.innerHTML = ''

    products.forEach(product => {
        const divElement = {
            id: product.id,
            title: product.title,
            image: product.image,
            // description: product.description,
            price: "$" + product.price,
            rating: product.rating.rate,
        }
        const productDiv = createProductSection(divElement);
        productsListDiv.appendChild(productDiv)
    });
}

//LocalStorage to save Favorite products
let favouriteList = [];
let storage = window.localStorage.getItem("favouriteList");

if(storage === null) {
    favouriteList = [];
}else {
    favouriteList = JSON.parse(storage);
}
function addFavoriteItem(event) {
    
    if(event.target.className === 'far fa-heart') {
        favouriteList.push(event.target.product)
        event.target.className = "fas fa-heart"
    }else {
        event.target.className = 'far fa-heart'
    }
    localStorage.setItem("favouriteList", JSON.stringify(favouriteList));
}
