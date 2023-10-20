const http = require("http"); // => it add .js at the end by defualt
const fs = require("fs");
function rqListener(request, response) {}

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html"); // ==> create header
    // create the response packets
    res.write("<html>"); //==> packets 1
    res.write("<head><title>My First Page</title></head>"); //==> packets 2
    res.write(
      "<body><form action='/message' method ='POST'><input type ='text' name='message'><button type='submit'>Send</button></input></form></body>"
    ); //==> packets 3
    res.write("</html>"); //==> packets 4
    res.end(); //=> close the response
    return;
  } else if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end;
    return;
  }
  res.setHeader("Content-Type", "text/html"); // ==> create header
  // create the response packets
  res.write("<html>"); //==> packets 1
  res.write("<head><title>My First Page</title></head>"); //==> packets 2
  res.write("<body><h1>Hello from My node js</h></body>"); //==> packets 3
  res.write("</html>"); //==> packets 4
  res.end(); //=> close the response

  console.log(req.url, req.method, req.headers);
});

server.listen(3000);
