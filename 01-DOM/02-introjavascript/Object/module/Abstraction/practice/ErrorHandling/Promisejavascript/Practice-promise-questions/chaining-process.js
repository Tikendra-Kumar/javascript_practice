// 1. Authenticate user
function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        console.log("1. User authenticated.");
        resolve({ userId: 42 });
      } else {
        reject("Authentication failed.");
      }
    }, 500);
  });
}


function getUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`2. User data retrieved for ID: ${userId}`);
      resolve({ userId, name: "Sarah Connor", role: "Developer" });
    }, 500);
  });
}


function getUserCourses(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`3. Courses retrieved for ${user.name}`);
      resolve(["JavaScript Async", "Node.js Essentials", "React Deep Dive"]);
    }, 500);
  });
}


loginUser("admin", "1234")
  .then((auth) => {
    return getUserData(auth.userId); 
  })
  .then((userData) => {
    return getUserCourses(userData); // Returns a new promise
  })
  .then((courses) => {
    console.log("Final Result - Enrolled Courses:", courses);
  })
  .catch((error) => {
    console.error("Pipeline Error:", error);
  });