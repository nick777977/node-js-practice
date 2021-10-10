const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => { //  .use() method will be triggered on every req
  console.log('In the middleware!');
  next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>'); // .send() auto-sets header for content type if u r passing a string
});

const server = http.createServer(app);

server.listen(3000);
