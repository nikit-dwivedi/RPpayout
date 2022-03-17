const http = require('http');

var app = require('./src/app.js');

var httpServer = http.createServer(app);
httpServer.listen(8080);