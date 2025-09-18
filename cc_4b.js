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
            discount = 1.5
    }
    let promoPrice = product.price * (1-discount);

}

//Step 4 Customer Type Adjustment

let customers = [
{ id: 1, customerType: "regular", couponCode:"SAVE10", taxRate: 0,
    cart: [{ sku: "A-100", qty: 2 }, { sku: "C-300", qty: 3}] },
{ id: 2, customerType: "student", couponCode:"FREESHIP", taxRate: 0.5,
    cart: [{ sku: "E-200", qty: 2 }, { sku: "B-400", qty: 3}] },
{ id: 3, customerType: "senior", couponCode:"", taxRate: 0.7,
    cart: [{ sku: "G-500", qty: 5 }, { sku: "C-300", qty: 6}] },
];
