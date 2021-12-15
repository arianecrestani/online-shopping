
const baseUrl = (endpoint) => {
    const mainUrl= 'https://fakestoreapi.com' 
    return `${mainUrl}/${endpoint}`
}
const apiRequest = async (endpoint) => {
    return await fetch(baseUrl(endpoint)) // > const response = await fetch('https://fakestoreapi.com' + products?limit=10)
        .then((response) => response.json())  // const products = await response.json
        .catch((error) => console.log(error));
};
 
const getProducts = () => `products?limit=10`;
const getSalesProducts = () => `products?sort=desc`;
const getElectroProducts = () => `products/category/electronics`;
const getJeweleryProducts = () => `products/category/jewelery`;
const getMensProducts = () => `products/category/men's%20clothing`;
const getWomenProducts = () => `products/category/women's%20clothing`;
const getSingleProduct = (item) => `products/${item}`;
// const getSingleCart = (id) => `carts/${id}`;

