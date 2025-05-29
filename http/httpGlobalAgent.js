const { globalAgent } = require('http');

console.log('Global Agent:', globalAgent);

// Điều chỉnh số lượng kết nối tối đa
globalAgent.maxSockets = 10;

// Gửi yêu cầu HTTP sử dụng globalAgent
const http = require('http');

const options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET',
    agent: globalAgent, // Sử dụng globalAgent
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
});

req.end();
