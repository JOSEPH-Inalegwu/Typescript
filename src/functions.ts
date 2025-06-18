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
    return price - (discount || 0) //This logic needs to be setup for OPTIONAL parameter to work
}

let priceAtDiscount = calculatePrice(100, 20)


//DEFAULT
function calculateScore(
    initialScore: number, 
    penaltyPoint: number = 0 //This logic for DEFAULT parameter
): number {
    return initialScore - penaltyPoint
}

let scoreAfterPenalty = calculateScore(100, 30)
let scoreWithoutPenalty = calculateScore(100)



/* REST PARAMETERS IN TYPESCRIPT */
/*function sum(message: string, ...numbers: number[]): string {
    const doubled = numbers.map((num) => num * 2)
    console.log(doubled);
    
    let total = numbers.reduce((prev, current) => {
        return prev + current
    }, 0)
    return `${message} ${total}`;
}

let finalResult = sum('The total is', 1, 2, 3, 4, 5);
console.log(finalResult);*/


/* WHAT TYPES TO RETURN FROM A FUNCTION */
function logMessage(message: string) {
    console.log(message);
}

logMessage('Hello, Typescript');


/* ## Functions - Using Union Types as Function Parameters

### Challenge

Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:

- If the input is of type number, the function should multiply the number by 2 and log the result to the console.
- If the input is of type string, the function should convert the string to uppercase and log the result to the console.
*/
function processInput(input: string | number) {
    if (typeof input === 'number') {
        console.log(input * 2);
    } else {
        console.log(input.toUpperCase());
    }
}

processInput('Hello')
processInput(10)
        


function createEmployee({id}: {id: number}): {id: number, isActive: boolean} {
    return {id, isActive: id % 2 === 0}
}

const first = createEmployee({id: 1})
const second = createEmployee({id: 2})

console.log(first, second);

// Alternative
function createStudent(student: {id: number; name: string}): void {
    console.log(`Welcome to the course ${student.name.toUpperCase()}`);
}

const newStudent = {
    id: 4,
    name: 'Joseph'
}

createStudent(newStudent)


/*## Challenge

Your task is to create a function named processData that accepts two parameters:

- The first parameter, input, should be a union type that can be either a string or a number.
- The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false

The function should behave as follows:

- If input is of type number, the function should return the square of the number.
- If input is of type string, the function should return the string in uppercase.
- If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.
*/
function processData(
    input: string | number, 
    config: {reverse: boolean} = {reverse: false}
): string | number 
{
    if (typeof input === 'number') {
        return input * input
    } else {
        return config.reverse ? input.toUpperCase().split('').reverse().join('') : input.toUpperCase()
    }
}

console.log(processData(20));
console.log(processData('security'));
console.log(processData('security', {reverse: true}));


