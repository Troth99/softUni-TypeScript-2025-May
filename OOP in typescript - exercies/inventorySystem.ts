class Product {
  protected static productCount: number = 0;
  readonly id: number = 0;
  name: string;
  price: number;
  
  constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
      Product.productCount++
      this.id += Product.productCount;
      
  }
  getDetails(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
  }
    static getCount(): number {
        return Product.productCount
    }
  
}

class Inventory {
    private products: Product[] = [];


    addProduct(product: Product): void {
        this.products.push(product)
    }

    listProducts(): string {
        const resultProduct = this.products.map(p => p.getDetails())
        resultProduct.forEach(el => {
            console.log(el)
        })
        return `Total products created: ${Product.getCount()}`
    }
}

const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());
