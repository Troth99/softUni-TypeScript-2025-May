"use strict";
class Product {
    static productCount = 0;
    id = 0;
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        Product.productCount++;
        this.id += Product.productCount;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
    static getCount() {
        return Product.productCount;
    }
}
class Inventory {
    products = [];
    addProduct(product) {
        this.products.push(product);
    }
    listProducts() {
        const resultProduct = this.products.map(p => p.getDetails());
        resultProduct.forEach(el => {
            console.log(el);
        });
        return `Total products created: ${Product.getCount()}`;
    }
}
const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listProducts());
//# sourceMappingURL=inventorySystem.js.map