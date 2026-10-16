async function test() {
    return "Hello";
}

// An async function always returns a Promise.

// So:

let result = test();

// means:

// result → Promise

// You can consume it with:

test()
    .then(value => {
        console.log(value);
    });
