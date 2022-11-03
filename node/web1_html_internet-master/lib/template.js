module.exports = {
    HTML: function (title, list, body, control) {
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
    },
    List: function (filelist) {
      let list = '<ul>';
      for (let i = 0; i < filelist.length; i++) {
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
      }
      list = list + '</ul>'
      return list
    }
  }

 