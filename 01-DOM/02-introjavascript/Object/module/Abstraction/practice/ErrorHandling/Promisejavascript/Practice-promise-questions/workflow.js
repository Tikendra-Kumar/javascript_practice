function openBrowser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1. Browser launched successfully.");
      resolve({ browserStatus: "open" });
    }, 500);
  });
}

function login(session) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2. User logged into QA environment.");
      resolve({ ...session, user: "qa_tester" });
    }, 500);
  });
}

function searchProduct(session) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3. Searched for product: Wireless Headphones.");
      resolve({ ...session, product: "Wireless Headphones" });
    }, 500);
  });
}

function verifyProduct(session) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isVerified = true; // Set to false to simulate QA test failure
      if (isVerified) {
        console.log(`4. Verified details for ${session.product}. Pass!`);
        resolve({ ...session, verificationStatus: "passed" });
      } else {
        reject("Verification Failed: Product not found or specs mismatched.");
      }
    }, 500);
  });
}

function logout(session) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("5. User logged out and session ended.");
      resolve("QA Workflow Completed Successfully.");
    }, 500);
  });
}

// Sequential Execution using Promise Chaining
openBrowser()
  .then((session) => login(session))
  .then((session) => searchProduct(session))
  .then((session) => verifyProduct(session))
  .then((session) => logout(session))
  .then((finalMessage) => {
    console.log(finalMessage);
  })
  .catch((error) => {
    console.error("QA Test Run Failed:", error);
  });