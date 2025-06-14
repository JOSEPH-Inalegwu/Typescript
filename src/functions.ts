function sayHi(name: string) {
    console.log(`Hello, ${name.toUpperCase()}!`);
}

// sayHi("Alice");
// sayHi(true) 🔥🔥 Error

function calculateDiscount(price: number) {
    const hasDiscount = true;

    if (hasDiscount) {
        return "Discount Applied"
    }
    return price * 0.9;
}

const finalPrice = calculateDiscount(100);
console.log(`Final Price: ${finalPrice}`);

// Be careful with introduction 'any' type
function addFour(number: any) {
    let anotherNumber: number = 4
    return number + anotherNumber;
}

const result = addFour(4); 
const someValue = result
// someValue.myMethod() 🔥🔥 Error

console.log(someValue);


// 🔥🔥 CHALLENGE 🔥🔥
// - Create a new array of names.
// - Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
// - Use this function to check if various names are in your array and log the results.

let names: string [] = ['Alice', 'Bob', 'Charlie'];

function nameInList(name: string): boolean {
    return names.includes(name) 
}

let nameCheck = 'Bobby';

if (nameInList(nameCheck)) {
    console.log(`${nameCheck} is in the list.`);
    
} else {
    console.log(`${nameCheck} is not in the list.`);
}

// OPTIONAL AND DEFAULT PARAMETERS IN FUNCTIONS

//OPTIONAL
function calculatePrice(price: number, discount?: number): number {
    return price - (discount || 0)
}

let priceAtDiscount = calculatePrice(100, 20)


//DEFAULT
function calculateScore(
    initialScore: number, 
    penaltyPoint: number = 0
): number {
    return initialScore - penaltyPoint
}

let scoreAfterPenalty = calculateScore(100, 30)
let scoreWithoutPenalty = calculateScore(100)
