const express = require('express');

const app = express();

const PORT = 3000;


// Middleware

app.use(express.json());


// Sample Data

let students = [

  {
    id: 1,
    name: "Navya",
    city: "Pune"
  },

  {
    id: 2,
    name: "Rahul",
    city: "Delhi"
  }

];


/* ---------------- GET API ---------------- */

// Fetch All Students

app.get('/students', (req, res) => {

  res.json(students);

});


/* ---------------- POST API ---------------- */

// Add Student

app.post('/students', (req, res) => {

  const newStudent = req.body;

  students.push(newStudent);

  res.send("Student Added Successfully");

});


/* ---------------- PUT API ---------------- */

// Update Student

app.put('/students/:id', (req, res) => {

  const id = parseInt(req.params.id);

  const updatedData = req.body;

  students = students.map(student =>

    student.id === id

      ? { ...student, ...updatedData }

      : student

  );

  res.send("Student Updated Successfully");

});


/* ---------------- DELETE API ---------------- */

// Delete Student

app.delete('/students/:id', (req, res) => {

  const id = parseInt(req.params.id);

  students = students.filter(

    student => student.id !== id

  );

  res.send("Student Deleted Successfully");

});


/* ---------------- SERVER ---------------- */

app.listen(PORT, () => {

  console.log(`Server Running on Port ${PORT}`);

});