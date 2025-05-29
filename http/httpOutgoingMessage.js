const { OutgoingMessage, createServer, } = require('http');

const server = createServer((req, res) => {
    // Kiểm tra xem `OutgoingMessage` có phải là lớp cha của `res` không
    console.log(res instanceof OutgoingMessage); // true

    // Thiết lập tiêu đề phản hồi
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Custom-Header', 'Hello');

    // Gửi phản hồi
    res.write('Xin chào từ máy chủ!');
    res.end();
});

server.listen(3000, () => {
    console.log('Máy chủ chạy tại http://localhost:3000');
});
