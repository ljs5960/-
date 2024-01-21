// HTML 페이지 서빙하기  (결과 비교 파일 : 04\results\server-4.js)

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/plain');

    const { url, method } = req;

    if (method === 'GET' && url === '/home') {
        res.write('Home');
        res.end();
    } else if (method === 'GET' && url === '/about') {
        res.end('About');
    } else {
        res.end('Not Found');
    }
});

server.listen(8080, () => {
    console.log('Server Running');
});