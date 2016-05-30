const fetch = require('node-fetch');

run(function* () {
    const uri = 'http://jsonplaceholder.typicode.com/posts/1';
    const response = yield fetch(uri);
    const post = yield response.json();
    const title = post.title;
    console.log('Title:', title);
})

function run(generator) {
    const iterator = generator();
    const iteration = iterator.next();
    const promise = iteration.value;
    promise.then(response => {
        const anotherIterator = iterator.next(response);
        const anotherPromise = anotherIterator.value;
        anotherPromise.then(post => iterator.next(post));
    });
}

// refactor:
run(function* () {
    const uri = 'http://jsonplaceholder.typicode.com/posts/1';
    const response = yield fetch(uri);
    const post = yield response.json();
    const title = post.title;
    return title;
})
.catch(error => console.log(error.stack);)
.then(x => console.log('Run resulted in', x);)

function run(generator) {
    const iterator = generator();

    function iterate(iteration) {
        if (iteration.done) return iteration.value;
        const promise = iteration.value;
        return promise.then(x => iterate(iterator.next(x));
    }
    return iterate(iterator.next());
}
