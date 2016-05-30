// function* es un generator, que devuelve un iterator. yield especifica los
// valores que va a devolver el iterator cada vez que se llame al metodo next()
// 'yield' solo funciona dentro de generators (y no cruza scopes de funciones)

function* createIterator() {
    yield 1;
    yield 2;
    yield 3;
}

let iterator = createIterator();

console.log(iterator.next().value);   //1
console.log(iterator.next().value);   //2
console.log(iterator.next().value);   //3

//The yield keyword can be used with any value or expression, so you can write
//generator functions that add items to iterators without just listing the items
//one by one. For example, here’s one way you could use yield inside a for loop:

function* createIterator2(items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i];
    }
}

let interator2 = createIterator2([1,2,3]);

console.log(interator2.next());   //1
console.log(interator2.next());   //2
console.log(interator2.next());   //3
console.log(interator2.next());   //done

//You can use function expressions to create generators by just including a star (*)
//character between the function keyword and the opening parenthesis. For
//example:

let createIteratorFuncExpr = function* (items) {
    for (let i = 0; i <items.length; i++) {
        yield items[i];
    }
}

let iteratorFuncExpr = createIteratorFuncExpr([1,2,3]);

console.log(iteratorFuncExpr.next());   //1
console.log(iteratorFuncExpr.next());   //2
console.log(iteratorFuncExpr.next());   //3
console.log(iteratorFuncExpr.next());   //done

//Because generators are just functions, they can be added to objects, too. For
//example, you can make a generator in an ECMAScript 5-style object literal with
//a function expression:

var o = {
    iteratorObjectMethod: function* (items) {
        for (let i = 0; i < items.length; i++) {
            yield items[i];
        }
    }
}

//You can also use the ECMAScript 6 method shorthand by prepending the method
//name with a star (*):

var o = {
    * iteratorObjectMethod(items) {
        for (let i = 0; i < items.length; i++) {
            yield items[i];
        }
    }
}

let iteratorObjectMethod = o.iteratorObjectMethod([1,2,3]);

//These examples are functionally equivalent to the example in the “Generator
//Function Expressions”
