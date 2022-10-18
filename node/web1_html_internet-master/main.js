let http = require('http');
let fs = require('fs');
let app = http.createServer(function(request,response){
    let url = request.url;
    console.log(url)
    if(url == '/'){
      url = '/index.html';
    }
    if(url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);