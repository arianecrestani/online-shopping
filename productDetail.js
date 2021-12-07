let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let productId = urlParams.get('productId')


const singleProduct = () => {
    apiRequest(getSingleProduct(productId))
        .then((json) => updateUi(json));
};

const updateUi = (product) => {

    
}