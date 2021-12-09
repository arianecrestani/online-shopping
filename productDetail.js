let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let productId = urlParams.get('productId')

const singleProduct = () => {
    apiRequest(getSingleProduct(productId)).then((json) => updateUiItem(json));
};


const updateUiItem = (product) => {
    const itemTitle = document.getElementById('itemTitle')
    itemTitle.innerHTML =  product.title ? product.title : '';
}
