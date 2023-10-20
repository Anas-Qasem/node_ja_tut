const http = require("http"); // => it add .js at the end by default
const routes = require('./routes');


const server = http.createServer(routes.handler);
// const server = http.createServer(routes);

server.listen(3000);
