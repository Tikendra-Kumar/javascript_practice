//Complete Promise example
function getUserData() {

    return new Promise((resolve, reject) => {

        console.log("Fetching user data...");

        setTimeout(() => {

            const success = true;

            if (success) {
                resolve({
                    id: 502,
                    name: "Satyam"
                });
            } 
            else
            {
                reject(new Error("Failed to fetch user data"));
            }

        }, 2000);

    });
}
getUserData()
    .then(user => {
        console.log("User received:");
        console.log(user);
    })
    .catch((error)=>
     {
        console.log("Error:", error.message);
    })
    .finally(() =>{
        console.log("request completed");
    });

