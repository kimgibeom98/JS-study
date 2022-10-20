let http = require('http');
let fs = require('fs');
let url = require('url');

let app = http.createServer(function (request, response) {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;
  let title = queryData.id;
  if (pathname === "/") {
    if (title === undefined) {
      fs.readdir('./data', (err, filelist) => {
        title = 'Welcome';
        description = "Hello, Node.js"
        let list = '<ul>';
        for (let i = 0; i < filelist.length; i++) {
          list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
        }
        list = list + '</ul>'
        const template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          ${list}
          <h2>${title}</h2>
          <p>
          ${description}
          </p>
        </body>
        </html>`;
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readdir('./data', (err, filelist) => {
        let list = '<ul>';
        for (let i = 0; i < filelist.length; i++) {
          list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
        }
        list = list + '</ul>'
        fs.readFile(`data/${title}`, 'utf8', function (err, description) {
          const template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            <h2>${title}</h2>
            <p>
            ${description}
            </p>
          </body>
          </html>`;
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else {
    response.writeHead(404);
    response.end("Not found");
  }


});
app.listen(3000);