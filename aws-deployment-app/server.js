const express = require('express');

const app = express();

const PORT = 3000;


/* ---------------- HOME ROUTE ---------------- */

app.get('/', (req, res) => {

  res.send(`

    <h1>AWS Cloud Deployment Successful</h1>

    <h2>Node.js Application Running on EC2</h2>

  `);

});


/* ---------------- ABOUT ROUTE ---------------- */

app.get('/about', (req, res) => {

  res.send("This web application is deployed on AWS Cloud");

});


/* ---------------- SERVER ---------------- */

app.listen(PORT, () => {

  console.log(`Server Running on Port ${PORT}`);

});