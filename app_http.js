const http = require("http");

//Register a listener or event handler.
const handler = (req, res) => {
  //we need to handle various routes here
  if (req.url === "/") {
    res.write("Hello World. Home page");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write("courses page");
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
};

//create a Web Server. This server is an event emitter, means it listening for a named event.
const server = http.createServer(handler);

//listen() method creates an http server object and then configures it to receive incoming TCP connections on a specific port and IP address so that when clients request a connection to that port and send an http request, the server can receive that http request and process it, sending a response.In other word listen() method creates a listener on the specified port or path.

//every time there is a new connection or new request this server raises an event.So we can use .on() method to handle that event.

//only for testing purpose
// server.on("connection", (socket) => {
//   console.log("New Connection");
// });

server.listen(3000);
console.log("Listening on port 3000...");

/////Express, is a back end web application framework for building RESTful APIs with Node.js,
