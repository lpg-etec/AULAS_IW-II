const http = require('http');

http.createServer((req, res) => {
    res.end('bom dia');
}).listen(8000);