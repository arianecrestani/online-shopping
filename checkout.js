
let addItensCar = []

const loadCar = () => {
    let storage = window.localStorage.getItem("addItensCar");// 
    if(storage === null) {
        addItensCar = [];
    } else {
        addItensCar = JSON.parse(storage);
    }  
    updateUi(addItensCar)
}


const loading = () => {
    loadCar()
};

const createTitleDiv = (title) => {
    const titleDiv = document.createElement("div"); // cria uma div 
    titleDiv.id = "titleProduct"; // create a id to a div
    titleDiv.innerHTML = title; // show title html

    return titleDiv; // return titlediv
};

const createImageDiv = (image) => {
    const imageDiv = document.createElement("img"); // create element div
    imageDiv.id = "imageProduct"; // create a id to a div
    imageDiv.src = image; // putting a imagem to div 
    return imageDiv; // retonando a div
};

const createItemDiv = (product) =>{
    
    const div = document.createElement("div"); // create element div
    div.id = "createItem"; // create um id para ela

    const title = createTitleDiv(product.title); // create a div and show title in html
    div.appendChild(title); //colocando o tilte na div
  
    const image = createImageDiv(product.image); // create a img and show image in html
    div.appendChild(image); //puuting image in div

    return div //retarn a div
}

const updateUi = (products) => {
    const itensCar = document.getElementById('itensCar') // getting div 
    itensCar.innerHTML= '' // cleaning itens 

    // from products return a product 
    products.forEach((product) => {
        const itemDiv = createItemDiv(product) //create a product and show the
        itensCar.appendChild(itemDiv)//add item a product list
    })
   
    
}


