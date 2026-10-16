
function downloadFile() {
  return new Promise((resolve) => {
   
    setTimeout(() => {
      resolve("File downloaded successfully");
    }, 2000);
  });
}



console.log("Starting download...");

downloadFile()
  .then((message) => {
    console.log(message); 
  });
