// Function returning a Promise
function login(username, password) {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "1234") {
      resolve("Login successful! Welcome, admin.");
    } else {
      reject("Login failed: Invalid credentials.");
    }
  });
}

login("admin", "1234")
  .then((message) => {
    console.log(message); 
  })
  .catch((error) => {
    console.error(error); 
  })
  .finally(() => {
    console.log("Authentication attempt finished."); 
  });


login("user", "wrongpass")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Authentication attempt finished.");
  });