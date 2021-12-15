let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let productId = urlParams.get('productId')

const singleProduct = () => {
    apiRequest(getSingleProduct(productId)).then((json) => updateUiItem(json));
};

const updateUiItem = (product) => {

    const detailsContainer = document.getElementById('detailsContainer')

    const itemTitle = document.getElementById('itemTitle')
    itemTitle.innerHTML = product.title ? product.title : '';


    const itemDescription = document.getElementById('itemDescription')
    itemDescription.innerHTML = product.description ? product.description : '';
    
    
    const itemImage = document.getElementById('itemImage')
    itemImage.innerHTML = `<img src="${product.image}"/>`;

    const itemPrice = document.getElementById('itemPrice')
    itemPrice.innerHTML = product.price ? "$" + product.price : '';

    const itemRate = document.getElementById('itemRate')
    itemRate.innerHTML = product.rating.rate ? product.rating.rate : '';

    const iconCart = document.createElement('a')
    iconCart.className='fas fa-cart-plus';
    iconCart.product = product
    iconCart.id = 'iconCart'
    iconCart.addEventListener("click", addToCar)
    detailsContainer.appendChild(iconCart)

}
const addToCar = (event) => {
    let addItensCar = []
    let storage = window.localStorage.getItem("addItensCar");//The getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.
    
    if(storage !== null) { //A DOMString containing the value of the key. If the key does not exist, null is returned.
        addItensCar = JSON.parse(storage);
    }  

    if(event.target.className === 'fas fa-cart-plus') {
        addItensCar.push(event.target.product)
        event.target.className = "fas fa-cart-plus"
    }

    window.localStorage.setItem("addItensCar", JSON.stringify(addItensCar));//save it in local storage
    //O método setItem() da interface Storage, quando passado 'chave' e 'valor', irá adicionar esta chave ao storage, ou atualizar o valor caso a chave já exista.
}



