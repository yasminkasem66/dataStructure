//stack
//functions :push , pop , peek, length
//array object  has all the functions we need to use it  as a stack element
//use stack to find word that are palindrome

// addtional notes in this session to review
// Function declarations in JavaScript are hoisted to the top of the enclosing function or global scope. You can use the function before you declared it  VS function expressions are not hoisted

function palindrome(word) {
    let letters = []; // this is out stack
    let rword = "";
    //  put letters of word in stacks
    Array.from(word).forEach((letter) => {
        letters.push(letter)
    })

    for (let i = 0; i < word.length; i++) {
        rword += letters.pop()
    }

    if (rword == word) console.log(word + " is a palindrome")
    else console.log(word + " is not a palindrome")

}

palindrome("racecar")
palindrome("freeCodeCamp")

//  second way to define a class
// create stack
class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }
    // Adds a value onto the end of the stack
    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    // Removes and returns the value at the end of the stack
    pop() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--; // cuz count is a head  by 1
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    size() {
        return this.count;
    }
    // Returns the value at the end of the stack
    peek() {
        return this.storage[this.count - 1];
    }
}


var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek()); //2
console.log(myStack.pop()); //2
console.log(myStack.peek()); //1
myStack.push("freeCodeCamp");
console.log(myStack.size()); //2
console.log(myStack.peek());//freeCodeCamp
console.log(myStack.pop()); //freeCodeCamp
console.log(myStack.peek()); //1