// load the http module
var http = require('http');
var fs = require('fs'); 

function send404(response) { 
    response.writeHead(404, { 'Content-Type': 'text/plain' }); 
    response.write('Error 404: Resource not found.'); 
    response.end(); 
} 

// configure our HTTP server
var server = http.createServer(function (request, response) {
  if (request.method == 'GET' && request.url == '/') {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream('./index.html').pipe(response);
  } else { 
    send404(response);
  }
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listening at http://127.0.0.1:8000/");
