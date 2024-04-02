const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello World!<h1>');
    res.end('Hello!');
}).listen(8080, () => {
    console.log('Listening in 8080 port!');
});