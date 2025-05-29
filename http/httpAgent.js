const { Agent, request } = require('http');

const keepAliveAgent = new Agent({ keepAlive: true });

const options = {
    hostname: 'example.com',  // Đổi thành URL bạn muốn gửi request
    port: 80,
    path: '/',
    method: 'GET',
    agent: keepAliveAgent, // Gán agent vào options
};

request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
});
