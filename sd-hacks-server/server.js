// Setting up server
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 
const server = http.createServer(app);

app.get('/', function(req, res) {
    console.log('Got a get request');
    res.send('HI!!');
});

// Server listening for an open port or will default to 3001
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server is listening on port ${port}`);
});