const { STATUS_CODES, MessageEvent } = require('http');

console.log('Mã trạng thái 200:', STATUS_CODES[200]); // OK
console.log('Mã trạng thái 404:', STATUS_CODES[404]); // Not Found
console.log('Mã trạng thái 500:', STATUS_CODES[500]); // Internal Server Error
