const http = require('http');


// Create Server

const server = http.createServer((req, res) => {

  // Set response header

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  // Send response

  res.write("<h1>Welcome to Node.js Server</h1>");

  res.write("<p>Server is running successfully</p>");

  res.end();

});


// Port Number

const PORT = 3000;


// Start Server

server.listen(PORT, () => {

  console.log(`Server Running at http://localhost:${PORT}`);

});