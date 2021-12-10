let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let productId = urlParams.get('productId')

const singleProduct = () => {
    apiRequest(getSingleProduct(productId)).then((json) => updateUiItem(json));
};

const updateUiItem = (product) => {

    const itemTitle = document.getElementById('itemTitle')
    itemTitle.innerHTML = product.title ? product.title : '';


    const itemDescription = document.getElementById('itemDescription')
    itemDescription.innerHTML = product.description ? product.description : '';
    
    
    const itemImage = document.getElementById('itemImage')
    itemImage.innerHTML = `<img src="${product.image}"/>`;

    const itemPrice = document.getElementById('itemPrice')
    itemPrice.innerHTML = product.price ? product.price + " $" : '';

    const itemRate = document.getElementById('itemRate')
    itemRate.innerHTML = product.rating.rate ? product.rating.rate + " *" : '';

}


