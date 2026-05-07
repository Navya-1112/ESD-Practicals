const express = require('express');

const mongoose = require('mongoose');

const app = express();

const PORT = 3000;


// Middleware

app.use(express.json());


/* ---------------- DATABASE CONNECTION ---------------- */

mongoose.connect('mongodb://127.0.0.1:27017/studentDB')

.then(() => {

  console.log("MongoDB Connected");

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


/* ===================================================
                    CREATE OPERATION
=================================================== */

app.post('/students', async (req, res) => {

  const student = new Student(req.body);

  await student.save();

  res.send("Student Added Successfully");

});


/* ===================================================
                      READ OPERATION
=================================================== */

app.get('/students', async (req, res) => {

  const data = await Student.find();

  res.json(data);

});


/* ===================================================
                    UPDATE OPERATION
=================================================== */

app.put('/students/:id', async (req, res) => {

  await Student.updateOne(

    { _id: req.params.id },

    req.body

  );

  res.send("Student Updated Successfully");

});


/* ===================================================
                    DELETE OPERATION
=================================================== */

app.delete('/students/:id', async (req, res) => {

  await Student.deleteOne({

    _id: req.params.id

  });

  res.send("Student Deleted Successfully");

});


/* ---------------- SERVER ---------------- */

app.listen(PORT, () => {

  console.log(`Server Running on Port ${PORT}`);

});