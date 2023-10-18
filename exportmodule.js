var http=require('http');
var dt=require('./exportt');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The data and time currently is" +dt.myDateTime());
    res.end();


}).listen(8080);