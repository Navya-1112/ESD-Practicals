// VARIABLES

let studentName = "Navya";

const college = "BVCOEP";

var age = 19;

console.log(studentName);
console.log(college);
console.log(age);

// FUNCTION

function showMessage() {

    // GET INPUT VALUE

    let name =
        document.getElementById("nameInput").value;

    // CHANGE HTML CONTENT

    document.getElementById("message").innerHTML =
        "Hello " + name;

}