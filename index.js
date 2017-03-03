var nodeStatic = require('node-static');
var server = new nodeStatic.Server();
var http = require('http');

http.createServer(function(request, response) {
  request.addListener('end', function() {
    server.serve(request, response);
  }).resume();
}).listen(process.env.PORT || 3000);
