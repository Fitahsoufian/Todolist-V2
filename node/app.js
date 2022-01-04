const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

   
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.ejs';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.ejs';
      res.statusCode = 200;
      break;
    // case '/about-us':
    //   res.statusCode = 301;
    //   res.setHeader('Location', '/about');
    //   res.end();
    //   break;
    default:
      path += '404.ejs';
      res.statusCode = 404;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }

    res.end(data);
  });


});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node.js'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

