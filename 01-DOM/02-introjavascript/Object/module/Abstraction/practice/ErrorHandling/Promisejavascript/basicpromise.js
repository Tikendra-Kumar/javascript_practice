const myPromise = new Promise((resolve, reject) => {
  let success = true; 

  setTimeout(() => {
    if (success) {
      resolve("The operation was successful!"); 
    } else {
      reject("Something went wrong."); 
    }
  }, 1000);
});
 myPromise
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.log(error.message); 
  })
  .finally(() => {
    console.log("Operation complete.");
  });
