let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let productId = urlParams.get('productId')

const singleProduct = () => {
    apiRequest(getSingleProduct(productId)).then((json) => updateUiItem(json));
};

const createTitleItem = (title) => {
    const titleDiv = document.createElement("div");
    titleDiv.id = "titleProduct";
    titleDiv.innerHTML = title;

    return titleDiv;
};

const updateUiItem = (product) => {

    const productDetail = document.getElementById('productDetail')

    const divItem = document.createElement('div');
    divItem.appendChild(productDetail)

    const title = createTitleItem(product.title);
    title.innerHTML = product.title
    divItem.appendChild(title);


    return divItem

}
