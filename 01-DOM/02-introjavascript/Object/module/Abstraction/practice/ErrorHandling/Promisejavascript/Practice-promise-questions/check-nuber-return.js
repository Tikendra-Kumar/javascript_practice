
function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve(`Success: ${number} is greater than 10.`);
    } else {
      reject(new Error(`Failure: ${number} is 10 or less.`));
    }
  });
}


checkNumber(15)
  .then((message) => {
    console.log(message); 
  })
  .catch((error) => {
    console.error(error.message);
  });

checkNumber(7)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error.message); 
  });
