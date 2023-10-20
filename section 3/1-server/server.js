const http = require("http"); // => it add .js at the end by defualt

function rqListener(request, response) {}

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
});
res.setHeader("Content-Type", "text/html"); // ==> create header
// create the response packets
res.write("<html>"); //==> packets 1
res.write("<head><title>My First Page</title></head>"); //==> packets 2
res.write("<body><h1>Hello from My node js</h></body>"); //==> packets 3
res.write("</html>"); //==> packets 4
res.end(); //=> close the response
server.listen(3000);
