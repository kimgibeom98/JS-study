const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const template = require('./lib/template.js');
const path = require('path');
const sanitizeHtml = require('sanitize-html');


const app = http.createServer((request, response) => {
  const _url = request.url;
  const queryData = url.parse(_url, true).query;
  const pathname = url.parse(_url, true).pathname;
  let title = queryData.id;
  if (pathname === "/") {
    if (title === undefined) {
      fs.readdir('./data', (err, filelist) => {
        title = 'Welcome';
        description = "Hello, Node.js"
        const list = template.List(filelist);
        const html = template.HTML(title, list,
          `<h2>${title}</h2>${description}`,
          `<a href="/create">create</a>`)
        response.writeHead(200);
        response.end(html);


      });
    } else {
      fs.readdir('./data', (err, filelist) => {
        const filteredid = path.parse(title).base;
        fs.readFile(`data/${filteredid}`, 'utf8', (err, description) => {
          const sanitizeTitle = sanitizeHtml(title);
          const sanitizeDescription = sanitizeHtml(description, {
            allowedTags:['h1']
          });
          const list = template.List(filelist);
          const html = template.HTML(sanitizeTitle, list,
            `<h2>${sanitizeTitle}</h2>${sanitizeDescription}`,
            `<a href="/create">create</a> 
            <a href="/update?id=${sanitizeTitle}">update</a>
            <form action="delete_process" method="post">
              <input type="hidden" name="id" value="${sanitizeTitle}">
              <input type="submit" value="delete">
            </form>`)
          response.writeHead(200);
          response.end(html);
        });
      });
    }
  } else if (pathname === '/create') {
    fs.readdir('./data', (err, filelist) => {
      title = 'WEB - create';
      const list = template.List(filelist);
      const html = template.HTML(title, list, `
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
      response.end(html);
    });
  } else if (pathname === '/create_process') {
    let body = '';
    request.on('data', (data) => {
      body += data;
    });
    request.on('end', () => {
      const post = qs.parse(body)
      const title = post.title;
      const description = post.description;
      fs.writeFile(`data/${title}`, description, `utf-8`, (err) => {
        response.writeHead(302, { Location: `/?id=${title}` });
        response.end('success');
      })
    });
  } else if (pathname === `/update`) {
    fs.readdir('./data', (err, filelist) => {
      const filteredid = path.parse(title).base;
      fs.readFile(`data/${filteredid}`, 'utf8', (err, description) => {
        const list = template.List(filelist);
        const html = template.HTML(title, list,
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
        response.end(html);
      });
    });
  } else if (pathname === `/update_process`) {
    let body = '';
    request.on('data', (data) => {
      body += data;
    });
    request.on('end', () => {
      const post = qs.parse(body)
      const id = post.id
      const title = post.title;
      const description = post.description;
      fs.rename(`data/${id}`, `data/${title}`, (err) => {
        fs.writeFile(`data/${title}`, description, `utf-8`, (err) => {
          response.writeHead(302, { Location: `/?id=${title}` });
          response.end('success');
        })
      });
    });
  } else if (pathname === `/delete_process`) {
    let body = '';
    request.on('data', (data) => {
      body += data;
    });
    request.on('end', () => {
      const post = qs.parse(body)
      const id = post.id
      const filteredid = path.parse(id).base;
      fs.unlink(`data/${filteredid}`, (err) => {
        response.writeHead(302, { Location: `/` });
        response.end();
      })
    });
  } else {
    response.writeHead(404);
    response.end("Not found");
  }
});
app.listen(3000);