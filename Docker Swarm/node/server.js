var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('<h2>Hello World</h2>')
}).listen(3000);
console.log("Service started and listening on port 3000");