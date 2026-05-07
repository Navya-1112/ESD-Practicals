const express = require('express');

const mongoose = require('mongoose');

const app = express();

const PORT = 3000;


// Middleware

app.use(express.json());


/* ---------------- DATABASE CONNECTION ---------------- */

mongoose.connect('mongodb://127.0.0.1:27017/studentDB')

.then(() => {

  console.log("MongoDB Connected Successfully");

})

.catch((err) => {

  console.log(err);

});


/* ---------------- SCHEMA ---------------- */

const studentSchema = new mongoose.Schema({

  name: String,

  age: Number,

  city: String

});


/* ---------------- MODEL ---------------- */

const Student = mongoose.model(

  'Student',

  studentSchema

);


/* ---------------- INSERT DATA ---------------- */

app.get('/add', async (req, res) => {

  const student = new Student({

    name: "Navya",

    age: 20,

    city: "Pune"

  });

  await student.save();

  res.send("Student Data Saved");

});


/* ---------------- FETCH DATA ---------------- */

app.get('/students', async (req, res) => {

  const data = await Student.find();

  res.json(data);

});


/* ---------------- SERVER ---------------- */

app.listen(PORT, () => {

  console.log(`Server Running on Port ${PORT}`);

});