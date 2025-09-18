//Coding Challene 4B

//Step 2 Define arrays
let products = [
    { sku:"A-100", name:"Jeans", category:"apparel", price: 25.00, inventory: 18},
    { sku:"E-200", name:"Power bank", category:"electornics", price: 50.00, inventory: 5},
    { sku:"C-300", name:"Towels", category:"household", price: 12.34, inventory: 7},
    { sku:"B-400", name:"Tshirt", category:"apparel", price: 11.45, inventory: 12},
    { sku:"G-500", name:"Orange", category:"groceries", price: 6.23, inventory: 20},

];

//Step 3 Category Discounts
for (const product of products) {
    let discount = 0;
    switch (product.category) {
        case "groceries":
        case "household":
            discount = .1
            break;
        case "electronics":
            discount = .2
            break;
        case "apparel":
            discount = .15
    }
    let promoPrice = product.price * (1-discount);

}
