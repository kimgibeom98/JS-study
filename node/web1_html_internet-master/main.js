let http = require('http');
let fs = require('fs');
let url = require('url');
let qs = require('querystring');

function templateHTML(title, list, body, control){
  return ` <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${control}
    ${body}
  </body>
  </html>`;
}

function templateList(filelist){
  let list = '<ul>';
  for (let i = 0; i < filelist.length; i++) {
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
  }
  list = list + '</ul>'
  return list
} 

let app = http.createServer((request, response) => { 
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;
  let title = queryData.id;
  if (pathname === "/") {
    if (title === undefined) {
      fs.readdir('./data', (err, filelist) => {
        title = 'Welcome';
        description = "Hello, Node.js"
        const list = templateList(filelist);
        const template = templateHTML(title, list,
          `<h2>${title}</h2>${description}`,
          `<a href="/create">create</a>`)
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readdir('./data', (err, filelist) => {
        fs.readFile(`data/${title}`, 'utf8', (err, description) => {
          const list = templateList(filelist);
          const template = templateHTML(title, list,
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`)
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else if (pathname === '/create') {
    fs.readdir('./data', (err, filelist) => {
      title = 'WEB - create';
      const list = templateList(filelist);
      const template = templateHTML(title, list,`
      <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <form action="http://localhost:3000/create_process" method="post">
                <p><input type="text" name="title" placeholder="title"></p>
                <p>
                    <textarea name="description" id="" cols="30" rows="10" placeholder="description"></textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
            </form>
            
        </body>
        </html>
      `, ``)
      response.writeHead(200);
      response.end(template);
    });
  } else if(pathname === '/create_process') {
    let body = '';
      request.on('data', (data) => {
      body += data;
    });
    request.on('end', () =>{
      const post = qs.parse(body)
      const title = post.title;
      const description = post.description;
      fs.writeFile(`data/${title}`, description, `utf-8`, (err) => {
        response.writeHead(302, {Location: `/?id=${title}`});
        response.end('success');
      })
    });
  } else if(pathname === `/update`) {
    fs.readdir('./data', (err, filelist) => {
      fs.readFile(`data/${title}`, 'utf8', (err, description) => {
        const list = templateList(filelist);
        const template = templateHTML(title, list,
          `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
          </head>
          <body>
              <form action="http://localhost:3000/update_process" method="post">
                  <input type="hidden" name="id" value="${title}">
                  <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                  <p>
                      <textarea name="description" id="" cols="30" rows="10" placeholder="description">${description}</textarea>
                  </p>
                  <p>
                      <input type="submit">
                  </p>
              </form>
              
          </body>
          </html>
          `,
          `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`)
        response.writeHead(200);
        response.end(template);
      });
    });
  } else if(pathname === `/update_process`) {
    let body = '';
      request.on('data', (data) => {
      body += data;
    });
    request.on('end', () =>{
      const post = qs.parse(body)
      const id = post.id
      const title = post.title;
      const description = post.description;
      fs.rename(`data/${id}`,`data/${title}`, (err) => {
        fs.writeFile(`data/${title}`, description, `utf-8`, (err) => {
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end('success');
        })
      });
    });
  } else {
    response.writeHead(404);
    response.end("Not found");
  }
});
app.listen(3000);