var colors = ["red", "blue", "green"];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

function createIterator(items) {
    var i = 0;

    return {
        next: function() {
            var done = (i >= items.length);
            var value = !done ? items[i++] : undefined;

            return {
                done: done,
                value: value
            };
        }
    };
}

var iterator = createIterator([1,2,3,4,5,6]);

console.log(iterator.next());   //1
console.log(iterator.next());   //2
console.log(iterator.next());   //3
console.log(iterator.next());   //4
console.log(iterator.next());   //5
console.log(iterator.next());   //6
console.log(iterator.next());   //7
