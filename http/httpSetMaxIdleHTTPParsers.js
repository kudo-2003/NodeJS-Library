const { setMaxIdleHTTPParsers} = require('http');


// Đặt số lượng tối đa các trình phân tích HTTP nhàn rỗi
setMaxIdleHTTPParsers(500);

console.log('Đã đặt số lượng tối đa các trình phân tích HTTP nhàn rỗi thành 500');
