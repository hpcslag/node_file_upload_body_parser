node_file_upload_body_parser
============================

#Need Module
````javascript
var util = require('util');
var qs = require('querystring');
````

#Parser
````javascript
req.on('data',function(data){
		body+=data;
	});
	req.on('end',function(){
		fs.writeFile('config.txt',util.inspect(qs.parse(body),{showHidden:true,depth: null}),function(err){});
	});
````

#Result
````javascript
{
    name': '"fileToUpload"; 
    filename="push.txt"\r\n
    'Content-Type: text/plain\r\n\r\ntouch README.md SUMMARY.md\r\ngit init\r\ngit add README.md SUMMARY.md\r\ngit commit -m "first commit"\r\ngit remote add gitbook https://push.gitbook.io/hpcslag/unity-4-5-api-chinese-traditional.git\r\ngit push -u gitbook master\r\n'
    .....
}
````
