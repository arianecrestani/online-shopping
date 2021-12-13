
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
    titleDiv.id = "titleProduct"; // criando id para a div
    titleDiv.innerHTML = title; // mostrando o titulo no html

    return titleDiv; // retornado a titlediv
};

const createImageDiv = (image) => {
    const imageDiv = document.createElement("img"); // create element div
    imageDiv.id = "imageProduct"; // criando um id para a div
    imageDiv.src = image; // colocando a imagem na div 
    return imageDiv; // retonando a div
};

const createItemDiv = (product) =>{
    
    const div = document.createElement("div"); // create element div
    div.id = "createItem"; // create um id para ela

    const title = createTitleDiv(product.title); // criando uma div  e mostrando a title no html
    div.appendChild(title); //colocando o tilte na div
  
    const image = createImageDiv(product.image); // criando uma img  e mostrando a imagem no html
    div.appendChild(image); //colocando o image na div

    return div //retoanndo a div
}

const updateUi = (products) => {
    const itensCar = document.getElementById('itensCar') // pegando div html
    itensCar.innerHTML= '' // lipando os itens

    // para produtos vai retornar um produto
    products.forEach((product) => {
        const itemDiv = createItemDiv(product) // criando um produto e mostrando um produto
        itensCar.appendChild(itemDiv)//adicionando uma item na lista de produtos
    })
   
    
}


