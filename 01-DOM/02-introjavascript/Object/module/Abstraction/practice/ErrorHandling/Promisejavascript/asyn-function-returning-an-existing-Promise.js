 const P1 = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("hello");
    } else {
        reject("bye");
    }

});

async function test() {
    return P1;
}

let t = test();

t.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
});

