// Create the Promise
const myPromise = new Promise((resolve) => {
  resolve("Task completed successfully");
});

// Print the result using .then()
myPromise.then((result) => {
  console.log(result);
});
