const fs = require("fs");

function requestHandler(req, res) {
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
    const body = [];
    // we need to register event listener [ same  one when we create server]
    req.on("data", (chunk) => {
      // event will fire once we receiving data
      console.log(chunk);
      body.push(chunk);
    });
    // function will execute when the res end
    req.on("end", () => {
      // add all chucks to buffer
      const parseBody = Buffer.concat(body).toString(); // we convert it to string because we receiving massage
      console.log(parseBody);
      const message = parseBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });

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
}

//! Different way to export 
//! //////////////////////////////
exports.handler = requestHandler;
exports.someText = "Meow";
// module.exports.handler = requestHandler;
// module.exports.someText = "Meow";
//? ////////////////////////
// module.exports = {
//   handler: requestHandler,
//   someText: "Meow",
// };
//? ////////////////////////
// module.exports = requestHandler;
//? ////////////////////////
//! //////////////////////////////
//! Different way to export 
