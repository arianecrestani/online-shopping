
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

const createItemDiv = (product) =>{
    
    const div = document.createElement("div"); // create element div
    div.id = "createItem"; // create um id

    const image = createImageDiv(product.image); // create a img and show image in html
    div.appendChild(image); //puuting image in div

    const span = document.createElement('span');
    div.appendChild(span)

    const title = createTitleDiv(product.title); // create a div and show title in html
    span.appendChild(title); //colocando o tilte na div
  

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


