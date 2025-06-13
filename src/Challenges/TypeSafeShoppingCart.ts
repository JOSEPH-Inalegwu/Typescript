type product = {readonly name:string, price?:number, inStock:boolean};

let inventory: product[] = [
    {name: 'Apple', price: 10, inStock: true},
    {name: 'Banana', price: 25, inStock: true},
    {name: 'Cherry', inStock: false},
    {name: 'Date', inStock: true}
]

// inventory[0].name = 'Green Apple';

//Create a separate array ids that accepts only number | string.
let totalPrice: (number | string)[] = []


console.log(inventory);
