// JSON OBJECT

let student = {

    "name": "Navya",
    "age": 19,
    "course": "CSE"

};

console.log(student);

// FUNCTION

function showData() {

    // DISPLAY DATA

    document.getElementById("output").innerHTML =

        "Name: " + student.name +
        "<br>Age: " + student.age +
        "<br>Course: " + student.course;

}

// JSON STRING

let jsonString =

    '{"city":"Delhi","country":"India"}';

// PARSE JSON

let obj = JSON.parse(jsonString);

console.log(obj.city);

// CONVERT OBJECT TO JSON

let newJSON = JSON.stringify(student);

console.log(newJSON);