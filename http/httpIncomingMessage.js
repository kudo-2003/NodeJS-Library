const { IncomingMessage, createServer} = require('http');

const server = createServer((req, res) => {
    console.log(req instanceof IncomingMessage); // true, req là một thể hiện của IncomingMessage
    console.log('Phương thức:', req.method);
    console.log('URL:', req.url);
    console.log('Tiêu đề:', req.headers);

    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
        console.log('Nội dung yêu cầu:', body);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Yêu cầu đã được nhận!');
    });
});

server.listen(3000, () => {
    console.log('Máy chủ chạy tại http://localhost:3000');
});
