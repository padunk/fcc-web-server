const http = require('http');

http.createServer(function (req, res) {
   console.log(req.url, req.method);
});

// To serve a file with Node, we need to add new package called fs (File System)
// Declare and initialize a variable name fs and required fs package.
