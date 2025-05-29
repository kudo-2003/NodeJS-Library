
const { Server } = require('http');

const server = new Server((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node.js Server!');
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
