let tax: number | string = 20
tax = 100
tax = '$25'

let requestStatus: 'pending' | 'success' | 'error' = 'pending'
requestStatus = 'success'
// requestStatus = 'random'

let random: any = 4
random = 'hello'
random = true
random = 4

// TYPE ANNOTATIONS
const books = ['Wormwood', 'The Hobbit', 'Eat that Frog', 'The Art of War']

let foundBook: string | undefined;

for (let book of books) {
    if (book === 'Wormwood') {
        foundBook = book
        foundBook = foundBook.toUpperCase()
        break
    }
}

console.log(foundBook);


// CHALLENGE
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'
orderStatus = 'shipped'
orderStatus = 'delivered'
// orderStatus = 'cancelled' 

let discount: number | string = 15
discount = '15%'
// discount = true
