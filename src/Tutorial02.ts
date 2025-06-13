// ARRAYS IN TYPESCRIPT
let prices:number[] = [100, 200, 300, 400, 500];
// prices.push('600');

let fruits:string[] = ['apple', 'banana', 'orange'];

// let randoms:[] = ['apple']
let randoms: number[] = []

let names = ['Peter', 'Susan', 15, true]
let array: (string | boolean)[] = ['Apple', true, 'Mango', false]

// console.log(array);


// CHALLENGE
let temperatures: number[] = [20, 25, 31]
// temperatures.push('hot')

let colors: string[] = ['red', 'green', 'yellow']
// colors.push(true)

let mixedArray: (number | string)[] = [2, 'three', 10]


// OBJECTS IN TYPESCRIPT
let car: {brand:string; year:number} = {
    brand: 'BMW',
    year: 2025,
    // color: 'blue' //Error
}
car.brand = 'Lamborghini'


let book = {title:'book', cost:30}
let pen = {title:'pen', cost:20}
let notebook = {title:'notebook'}

let items: {readonly title:string; cost?:number}[] = [book,pen,notebook]

// items[0].title = 'Supacell' //Error
console.log(items);

// OBJECT CHALLENGE
let bike: {brand:string; year:number} = {
    brand: 'Suzuki',
    year: 2023
}
// bike.year = 'new'

let laptop: {brand:string; year:number} = {
    brand: 'Mac',
    year: 2023
}
// laptop.brand = true

let product1 = {title:'shirt', price:30}
let product2 = {title:'pants'}

let products: {title:string; price?:number}[] = [
    product1, product2
]
products.push({title:'shoes'})