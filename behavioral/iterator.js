class IteratorInterface {
    next() {}
}

class ListIterator extends IteratorInterface {
    constructor(collection) {
        super();
        this.collection = collection;
        this.index = 0;
    }

    next() {
        if(this.collection.length > this.index) {
            return { 
                done: false, 
                value: this.collection[this.index++]
            };
        } else {
            return { done: true };
        }
    }
}

class ListReverseIterator extends IteratorInterface {
    constructor(collection) {
        super();
        this.collection = collection;
        this.index = this.collection.length - 1;
    }

    next() {
        if(this.index >= 0) {
            return { 
                done: false, 
                value: this.collection[this.index--]
            };
        } else {
            return { done: true };
        }
    }
}

class List {
    constructor() {
        this.collection = [];
    }

    add(el) {
        this.collection.push(el);
    }

    [Symbol.iterator]() {
        return new ListIterator(this.collection);
    }

    getIterator() {
        return new ListIterator(this.collection);
    }

    getReverseIterator() {
        return new ListReverseIterator(this.collection);
    }
}

let list = new List();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.add(8);

// Normal iterator
let output1 = "";
for(let el of list) {
   output1 += el + " ";
}
console.log(`Default iterator: ${output1}`);

// Reverse iterator
let output2 = "";
let iterator = list.getReverseIterator();

while(true) {
    let next = iterator.next();
    if(next.done === true) { break; }
    output2 += next.value + " ";
}

console.log(`Reverse iterator: ${output2}`);