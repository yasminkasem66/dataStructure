//Queue  ==>first in first out
//functions :shift , peek, length
//array object  has all the functions we need to use it  as a queue  element
//use stack to find word that are palindrome

/* Queues */

class Queue {
    constructor() {
        this.collection = [];
    }
    print = function () {
        console.log(this.collection);
    };
    enqueue = function (element) {
        this.collection.push(element);
    };
    dequeue = function () { 
        return this.collection.shift(); // remove from the start 
    };
    front = function () {
        return this.collection[0];
    };
    size = function () {
        return this.collection.length;
    };
    isEmpty = function () {
        return (this.collection.length === 0);
    };
}

let q = new Queue(); 
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();// a b c
console.log(q.dequeue()); //a
console.log(q.front()); //b
console.log(q.isEmpty()); //false
q.print(); //b c





function PriorityQueue() {
    let collection = [];
    this.printCollection = function () {
        (console.log(collection));
    };

    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) { //checking priorities
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    };
    this.dequeue = function () {
        let value = collection.shift();
        return value;
    };
    this.front = function () {
        return collection[0];
    };
    this.size = function () {
        return collection.length;
    };
    this.isEmpty = function () {
        return (collection.length === 0);
    };
}

let pq = new PriorityQueue();
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Beau Carnes1111', 1]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.printCollection();
console.log(pq.dequeue());
console.log(pq.front());
pq.printCollection();

