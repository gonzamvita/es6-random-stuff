//Closely related to iterators, an iterable is an object with a Symbol.iterator
//property. The well-known Symbol.iterator symbol specifies a function that
//returns an iterator for the given object. All collection objects (arrays,
//sets, and maps) and strings are iterables in ECMAScript 6 and so they have a
//default iterator specified. Iterables are designed to be used with a new
//addition to ECMAScript: the for-of loop.

let array = [1,2,3,4];

for (let num of array) {
    console.log(num);
}

//You can use Symbol.iterator to access the default iterator for an object, like
//this:

let values = [1,2,3];
let iterator = values[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//This is the same process that happens behind-the-scenes when using a for-of
//loop.

//Since Symbol.iterator specifies the default iterator, you can use it to detect
//whether an object is iterable as follows:
function isIterable(object) {
    //The for-of loop does a similar check before executing.
    return typeof(object[Symbol.iterator]) === "function";
}

console.log(isIterable([1,2,3,4]));     //true
console.log(isIterable("Hello"));       //true
console.log(isIterable(new Map()));     //true
console.log(isIterable(new Set()));     //true
console.log(isIterable(new WeakMap())); //false
console.log(isIterable(new WeakSet())); //false
