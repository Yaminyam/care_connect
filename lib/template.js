module.exports = {
  HTML: function (title, body) {
    return `
      <!doctype html>
      <html>
      <head>
        <title>${title}</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/css/bootstrap.min.css">
        <link rel="stylesheet" href="/chart/Chart.min.css">
      </head>
      <body>
        ${body}
      </body>
      </html>
      `;
  }
}