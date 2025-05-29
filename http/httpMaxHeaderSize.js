const { maxHeaderSize, createServer } = require('http');


const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
});

// Đặt kích thước tối đa của tiêu đề HTTP thành 16KB
server.maxHeaderSize = 16384;

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
