function reverseStringFunc(userInput) {
    // Break string and reverse it
    let reverseString = userInput.split("").reverse();
    // Join object/Array
    reverseString = reverseString.join();
    return reverseString;

}

let output = reverseStringFunc("DEVELOPMENT")
console.log(output)