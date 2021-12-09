let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let productId = urlParams.get('productId')

const singleProduct = () => {
    apiRequest(getSingleProduct(productId)).then((json) => updateUiItem(json));
};

const updateUiItem = (product) => {

    const itemTitle = document.getElementById('itemTitle')
    itemTitle.innerHTML = product.title ? product.title : '';

    const itemImage = document.getElementById('itemImage')
    itemImage.innerHTML = `<img src="${product.image}"/>`;
   

    const itemPrice = document.getElementById('itemPrice')
    itemPrice.innerHTML = product.price ? product.price : '';

    const itemRating = document.getElementById('itemRating')
    itemRating.innerHTML = product.rate ? product.rate : '';
    
}

/* const createImage = (image) => {
    const imageDiv = document.createElement("div");
    imageDiv.id = "imageProduct";
    imageDiv.innerHTML = `<img src="${image}"/>`;
    return imageDiv;
};
*/

//localStorage.setItem("")

