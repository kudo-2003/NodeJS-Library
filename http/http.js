const { createServer} = require('http');
const fs = require('fs');
const path = require('path');

const server = createServer((req, res) => {
    let filePath = path.join(__dirname, req.url);
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('File not found');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
