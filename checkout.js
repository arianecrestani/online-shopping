//remove e redesigner the list 
let addItensCar = []

const loadCar = () => {
    let storage = window.localStorage.getItem("addItensCar");// The getItem() method returns value of the specified Storage Object item.
    if(storage === null) {
        addItensCar = [];
    } else {
        addItensCar = JSON.parse(storage);
    }  
    updateUi(addItensCar)
    console.log(addItensCar)
}


let itemToRemove = [];

const removeItemCar = (product) => {
    console.log('kkkkkk')
   

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

    const removeItemCar = document.createElement("a")
    removeItemCar.className = 'fas fa-minus-square'
    removeItemCar.id='iconCart'
    div.appendChild(removeItemCar)
    removeItemCar.addEventListener('click',()=>{
        console.log(product)
        let newCart = addItensCar.filter(function(cartItem) {
            console.log(cartItem)
            return cartItem.id !== product.id;
   
       })
       localStorage.setItem("addItensCar",JSON.stringify (newCart));
       loadCar() 
    })

    const title = createTitleDiv(product.title); // create a div and show title in html
    div.appendChild(title); //colocando o title na div
 

    const price = createPriceDiv(product.price); // create a div and show title in html
    div.appendChild(price); //colocando o price na div

    const image = createImageDiv(product.image); // create a img and show image in html
    div.appendChild(image); 


    return div //retarn a div
}



const changeNumberOfUnits = () => {
  

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


