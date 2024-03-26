const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello World!<h1>');
    res.end('Hello!');
});
server.listen(8080);

server.on('listening', () => {
    console.log('Listening in 8080 port!');
});
server.on('error', (error) => {
    console.error(error);
});