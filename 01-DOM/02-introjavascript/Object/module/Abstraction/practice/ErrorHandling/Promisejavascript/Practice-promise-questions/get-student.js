// Function returning a Promise with student data
function getStudent() {
  return new Promise((resolve) => {
   
    const student = {
      id: 101,
      name: "Raja Rajput",
      marks: 88
    };
    
    resolve(student);
  });
}

getStudent()
  .then((student) => {
    console.log(`Name: ${student.name}`);
    console.log(`Marks: ${student.marks}`);
  })
  .catch((error) => {
    console.error("Error fetching student details:", error);
  });