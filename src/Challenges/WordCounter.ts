
function countWords(words: string[]): object {
    const result = {}

    words.forEach((word) => {
        if (word in result) {
            result[word] += 1
        } else {
            result[word] = 1
        }
    });

    return result
}

const result = countWords(["apple", "banana", "apple", "orange", "banana", "apple"])
console.log(result);
