const EventEmitter = require("events");

// console.log(__dirname);
// console.log(__filename);
//to give all the abilities(props and methods of EventEmitter class we use 'expents')
class Logger extends EventEmitter {
  log(message) {
    //Send an HTTP request
    console.log(message + " module func");

    //Raise an event
    this.emit("messageLocked", { id: 2, url: "http://" });
  }
}

// module.exports.log = log;//exported as an object
// module.exports = log; //exported as a function
module.exports = Logger; // export Logger class
