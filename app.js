const http = require('http');

const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);
console.log('muradkhan')

server.listen(9999);

