const productsArray = [
    {
        id: "price_1MAu3ZSFtpApC4UfJSSWrUWw",
        title: "test",
        price: 5.00
    },
    {
        id: "price_1MAu6SSFtpApC4UfmgOPz6EZ",
        title: "coffee",
        price: 2.00
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };