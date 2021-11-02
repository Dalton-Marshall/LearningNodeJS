const http = require('http');

const server = http.createServer();

// subscribe to it, listen for it, or respond to it
server.on('request', (req, res) => {
    res.end('Welcome');
})

server.listen(5000);