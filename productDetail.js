let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let productId = urlParams.get('productId')


const singleProduct = () => {
    apiRequest(getSingleProduct(productId))
        .then((json) => updateUi(json));
};

function createProductSection(product) {
    
    let divElement = document.createElement("div")
    divElement.id = 'productSingleSection'
    let imageDiv = document.createElement("img")
    imageDiv.innerHTML = product.image
   /* imageDiv.innerHTML = image.product */
    imageDiv.id = 'imageOfProduct'
    divElement.appendChild(imageDiv)

}
const updateUi = (product) => {
    let productContainer = document.getElementsByClassName("sproduct")

    product.forEach(product => {
        const divElement = {
            title: product.title,
            image: product.image,
            // description: product.description,
            price: product.price,
            rating: product.rating.rate,
        }
        const productSection = createProductSection(divElement);
        productContainer.appendChild(productSection)


    });
}