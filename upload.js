var http = require('http');
var fs = require('fs');
var util = require('util');
var qs = require('querystring');

http.createServer(function(req,res){
	console.log("Somebody Request File");
	var body = '';
	req.on('data',function(data){
		body+=data;
	});
	req.on('end',function(){
		fs.writeFile('config.txt',util.inspect(qs.parse(body),{showHidden:true,depth: null}),function(err){});
	});

	res.writeHead(200);
	res.end();
	var ent = util.inspect(req,{showHidden: true, depth: null});
	
}).listen(80);