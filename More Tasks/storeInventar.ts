interface Food {

  name: string;
  price: number;
  calories: caloriesType;
}

interface Clothing {

  name: string;
  price: number;
  size: size;
}

interface Electornics {

  name: string;
  price: number;
  warrantyInMonths: warrantyInMonths;
}

type caloriesType = number
 
type warrantyInMonths = number

type size =  "S" | "M" | "L" | "XL";


type StoreItem = Food | Clothing | Electornics

function printItemInfo(item: StoreItem): void {

    if ('calories' in item) {
        console.log(`Food name: ${item.name}. Food price ${item.price}. Food calories ${item.calories}`)
    }else if ('size' in item) {
         console.log(`Cloth name: ${item.name}. Cloth price ${item.price}. Cloth size ${item.size}`)
    }else if ('warrantyInMonths' in item) {
         console.log(`Electornic name: ${item.name}. Electornic price ${item.price}. Electornic in months ${item.warrantyInMonths}`)

    }
}

let item1 = {
    name: 'Apple',
    price: 3.45,
    calories: 250
};

let item2: StoreItem = {
  name: 'T-shirt',
  price: 12.99,
  size: 'L',
};

printItemInfo(item1);
