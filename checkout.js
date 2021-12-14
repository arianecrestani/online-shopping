//remove e redesigner the list 
let addItensCar = []

const loadCar = () => {
    let storage = window.localStorage.getItem("addItensCar");// 
    if(storage === null) {
        addItensCar = [];
    } else {
        addItensCar = JSON.parse(storage);
    }  
    updateUi(addItensCar)
    console.log(addItensCar)
}


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
    priceDiv.innerHTML = price;

    return priceDiv;

};

const createItemDiv = (product) =>{
    
    const div = document.createElement("div"); // create element div
    div.id = "createItem"; // create um id

    const iconCart = document.createElement("a")
    iconCart.className = 'fas fa-minus-square'
    iconCart.id='iconCart'
    // const isInTheCar = getItemIndex(product) >= 0
    // iconCart.className = isInTheCar ? 'fas fa-minus-square' : 'fas fa-cart-plus'
    // iconCart.product=product
    // div.addEventListener('click', removeItem)
    div.appendChild(iconCart)

    const image = createImageDiv(product.image); // create a img and show image in html
    div.appendChild(image); //puuting image in div
   

    const span = document.createElement('span');
    span.id= 'detailsText'
    div.appendChild(span)
    

    const title = createTitleDiv(product.title); // create a div and show title in html
    span.appendChild(title); //colocando o title na div
 

    const price = createPriceDiv(product.price); // create a div and show title in html
    span.appendChild(price); //colocando o price na div

 

    return div //retarn a div
}

// const getItemIndex = (product) => {
//     for (let i = 0; i < addItensCar.length; i++) {
//         const isInTheCar = addItensCar[i];
//         if (isInTheCar.id === product.id) {
//             return i;
//         }
//     }
// }

// const removeItem = (event) => {
//    const indexOf = getItemIndex(event.target.product)
//     addItensCar.splice(indexOf, 1);
//     event.target.className = 'far fa-heart'
   
//     localStorage.setItem("addItensCar", JSON.stringify(addItensCar));
// }




const updateUi = (products) => {
    const itensCar = document.getElementById('itensCar') // getting div 
    itensCar.innerHTML= '' // cleaning itens 

    // from products return a product 
    products.forEach((product) => {
        const itemDiv = createItemDiv(product) //create a product and show the
        itensCar.appendChild(itemDiv)//add item a product list

    })


}


