"use strict"
/* Function called by event */
//const singleProduct = async () => { const json = await apiRequest(...); updateUiItem(json); }


let favoriteList = []; //part of favorites

const loadFavoriteItens = () => {

  //get itens and insert in the favoriteList
  let storage = window.localStorage.getItem("favouriteList");// 

  if(storage === null) {
      favoriteList = [];
  } else {
      favoriteList = JSON.parse(storage);
  }  
}

const loading = () => {
    loadFavoriteItens()
    apiRequest(getProducts())// function called by endpoint
    .then((json) => updateUi(json));//return updateUi in json
};

const btnElectroProducts = () => {
    apiRequest(getElectroProducts())
    .then((json) => updateUi(json));
}
const btnJeweleryProducts = () => {
    apiRequest(getJeweleryProducts())
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
    const isFavorite = getFavoriteIndex(product) >= 0 //part of favorite
    iconHeart.className = isFavorite ? 'fas fa-heart' : 'far fa-heart' //part of favorite
    iconHeart.id = 'iconHeart'
    iconHeart.product = product
    iconHeart.addEventListener("click", addFavoriteItem) //save to favorite
    span.appendChild(iconHeart)

    const iconCart = document.createElement('a')
    // const isInCar = getCarIndex(product) >= 0
    // iconCart.className = isInCar ? 'fas fa-cart-plus' : 'fas fa-cart-plus' 
    iconCart.className = 'fas fa-cart-plus'
    iconCart.product = product
    iconCart.id = 'iconCart'
    iconCart.addEventListener("click", addToCar)
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
            rating: product.rating.rate ? product.rating.rate : product.rating
        }
        const productDiv = createProductSection(divElement);
        productsListDiv.appendChild(productDiv)
    });
}

//LocalStorage to save Favorite products
const getFavoriteIndex = (product) => {
    for (let i = 0; i < favoriteList.length; i++) {
        const favorite = favoriteList[i];
        if (favorite.id === product.id) {
            return i;
        }
    }
}

const addFavoriteItem = (event) => {
    if(event.target.className === 'far fa-heart') {
        favoriteList.push(event.target.product)
        event.target.className = "fas fa-heart"
    } else {
        const indexOf = getFavoriteIndex(event.target.product)
        favoriteList.splice(indexOf, 1);
        event.target.className = 'far fa-heart'
    }
    localStorage.setItem("favouriteList", JSON.stringify(favoriteList));
}

const btnFavoriteList = () => {
    updateUi(favoriteList)
}

// add itens in the car
const addToCar = (event) => {
    let addItensCar = []
    let storage = window.localStorage.getItem("addItensCar");//The getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.
    
    if(storage !== null) { //A DOMString containing the value of the key. If the key does not exist, null is returned.
        addItensCar = JSON.parse(storage);
    }  

    if(event.target.className === 'fas fa-cart-plus') {
        addItensCar.push(event.target.product)
        event.target.className = "fas fa-cart-plus"
    } // else remove

    window.localStorage.setItem("addItensCar", JSON.stringify(addItensCar));//save it in local storage
}