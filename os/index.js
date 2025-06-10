const { networkInterfaces, loadavg,machine,hostname,homedir,platform,setPriority,tmpdir,getPriority,freemem,endianness,cpus, availableParallelism, version, type, release, userInfo, uptime, devNull, EOL, constants, arch, totalmem} = require('os');

// console.log('Trả về tên hệ điều hành như được trả về bởi uname(3).', type());
// console.log('Trả về hệ điều hành dưới dạng chuỗi:', release());
// console.log('Trả về một chuỗi xác định phiên bản kernel:', version());
// console.log('Phiên bản Node.js OS:', platform());
// console.log('Trả về đường dẫn của thiết bị null trên hệ điều hành cụ thể.:', devNull);
// console.log('Dấu hiệu kết thúc dòng dành riêng cho hệ điều hành:', EOL);
// console.log('Trả về thông tin về người dùng hiện đang có hiệu lực.:', userInfo());
// console.log('Trả về thời gian hoạt động của hệ thống tính bằng giây.', uptime());
// console.log(`module constants chứa một tập hợp các hằng số hệ thống hữu ích, bao gồm: 
//     Các giá trị lỗi (errno): Chẳng hạn như EACCES, ECONNRESET, EPIPE, v.v.
// Các tín hiệu hệ thống (signals): Như SIGINT, SIGTERM, SIGKILL, v.v.
// Các giá trị ưu tiên (priority): Bao gồm PRIORITY_LOW, PRIORITY_HIGH, PRIORITY_HIGHEST, v.v.`, constants);
// console.log(`Trả về kiến ​​trúc CPU của hệ điều hành mà nhị phân Node.js được biên dịch. Các giá trị có thể là 
//     'arm', 'arm64', 'ia32', 'loong64', 'mips', 'mipsel', 'ppc64', 'riscv64', 's390x' và 'x64'.`, arch());
// console.log('Trả về tổng dung lượng bộ nhớ hệ thống tính theo byte dưới dạng số nguyên:', totalmem());
// console.log('Trả về ước tính về lượng song song mặc định mà một chương trình nên sử dụng. Luôn trả về giá trị lớn hơn 0:', availableParallelism());
// console.log(`Trả về một mảng các đối tượng chứa thông tin về từng lõi CPU logic.
//      Mảng sẽ trống nếu không có thông tin CPU nào khả dụng, chẳng hạn như nếu hệ thống tệp /proc không khả dụng.`, cpus());
// console.log('Trả về một chuỗi xác định độ endian của CPU mà nhị phân Node.js được biên dịch:', endianness());
console.log('?', freemem());
console.log('?', getPriority());
console.log('?', tmpdir());
console.log('?', setPriority);
console.log('?', homedir());
console.log('?', hostname());
console.log('?', machine());
console.log('?', loadavg());
console.log('?', networkInterfaces());

