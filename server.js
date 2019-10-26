// Setting up server
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 
const server = http.createServer(app);

// Send homepage by default
app.get('/', function(req, res) {
    console.log("Sending index.html page...");
    res.sendFile(__dirname + '/pages/index.html');
});

// Handle 404 errors
app.use(function(req, res) {
    console.log("Sending 404");
    res.status('404').sendFile(__dirname + '/pages/404.html');
});

// Server listening for an open port or will default to 3001
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server is listening on port ${port}`);
});