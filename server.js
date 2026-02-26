const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/post') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({status:'ok', data: body}));
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('TLS Legacy Test Server (Render HTTPS)');
    }
});

server.listen(process.env.PORT || 10000);
