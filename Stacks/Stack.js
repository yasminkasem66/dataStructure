//stack
//functions :push , pop , peek, length
//array object  has all the functions we need to use it  as a stack element
//use stack to find word that are palindrome

let letters = []; // this is out stack

let word = "racecar";

let rword = " ";

Array.from(word).forEach((letter) => {
    letters.push(letter)
})
console.log(letters)
    //  put letters of word in stacks
