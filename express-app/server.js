const express = require('express');

const app = express();

const PORT = 3000;


/* ---------------- MIDDLEWARE ---------------- */

// Custom Middleware

app.use((req, res, next) => {

  console.log("Middleware Executed");

  console.log("Request URL:", req.url);

  next();

});


/* ---------------- ROUTES ---------------- */


// Home Route

app.get('/', (req, res) => {

  res.send("<h1>Welcome to Home Page</h1>");

});


// About Route

app.get('/about', (req, res) => {

  res.send("<h1>About Page</h1>");

});


// Contact Route

app.get('/contact', (req, res) => {

  res.send("<h1>Contact Page</h1>");

});


/* ---------------- SERVER ---------------- */

app.listen(PORT, () => {

  console.log(`Server Running on Port ${PORT}`);

});