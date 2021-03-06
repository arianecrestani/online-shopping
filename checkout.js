//remove e redesigner the list 
let addItensCar = []

const loadCar = () => {
    let storage = window.localStorage.getItem("addItensCar");// The getItem() method returns value of the specified Storage Object item.
    if (storage === null) {
        addItensCar = [];
    } else {
        addItensCar = JSON.parse(storage);
    }
    updateUi(addItensCar)
    console.log(addItensCar)
};

const loading = () => {
    loadCar()
};

const createImageDiv = (image) => {
    const imageDiv = document.createElement("img"); // create element div
    imageDiv.id = "imageProduct"; // create a id to a div
    imageDiv.src = image; // putting a imagem to div 
    return imageDiv; // retonando a div
};

const createTitleDiv = (title) => {
    const titleDiv = document.createElement("div"); // cria uma div 
    titleDiv.id = "titleProduct"; // create a id to a div
    titleDiv.innerHTML = title; // show title html

    return titleDiv; // return titlediv
};

const createPriceDiv = (price) => {
    const priceDiv = document.createElement("div");
    priceDiv.id = "priceProduct";
    priceDiv.innerHTML = "$ " + price;

    return priceDiv;

};

const createItemDiv = (product) => {

    const div = document.createElement("div"); // create element div
    div.id = "createItem"; // create um id

    const removeItemCar = document.createElement("a")
    removeItemCar.className = 'fas fas fa-trash'
    removeItemCar.id = 'iconCart'
    div.appendChild(removeItemCar)
    removeItemCar.addEventListener('click', () => {
        let newCart = addItensCar.filter(function (cartItem) {
            return cartItem.id !== product.id;
        })
        localStorage.setItem("addItensCar", JSON.stringify(newCart));
        loadCar()
    })

    const image = createImageDiv(product.image); // create a img and show image in html
    div.appendChild(image); //puuting image in div


    const span = document.createElement('span');
    span.id = 'detailsText'
    div.appendChild(span)


    const title = createTitleDiv(product.title); // create a div and show title in html
    span.appendChild(title); //colocando o title na div


    const price = createPriceDiv(product.price); // create a div and show title in html
    span.appendChild(price); //colocando o price na div



    return div //retarn a div
};

const updateUi = (products) => {
    const itensCar = document.getElementById('itensCar') // getting div 
    itensCar.innerHTML = '' // cleaning itens 
    let sum = 0;

    // from products return a product 
    products.forEach((product) => {

        const itemDiv = createItemDiv(product) //create a product and show the
        sum += parseFloat(product.price)
        console.log(parseFloat(product.price))
  
        itensCar.appendChild(itemDiv)//add item a product list
    })
    console.log(sum)
    const sumPriceDiv = document.createElement("div");
    sumPriceDiv.id = "totalSum";
    sumPriceDiv.innerHTML = `Total $${sum}`

    if(sum > 0) {
        itensCar.appendChild(sumPriceDiv)        
    }
}


