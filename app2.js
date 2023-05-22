const Logger = require("./logger");
const logger = new Logger();
// EVENTS MODULE

//first import the module, then create an instance of it. Events Module has a bunch of classes, 'EventEmitter' one of them. Using a class we can create an object that holds various realtive properties and methods that we can use.

//emit helps make/produce a noise, signalling that an event has happened. 'Emitter' will help to raise an event.(on === addListener). on listener takes 2 arguments: 1 one is the name of the event(in this case it's 'messageLocker', the second one is a callback function/ listener)

// 1 STEP: Register a Listener. Listener -  is a function that will be called when that event is raised.
logger.on("messageLocked", (arg) => {
  console.log("Listener called", arg);
});

//2 STEP:  Raise an event called 'message locked'.
// emitter.emit("messageLocked", {
//   id: 1,
//   url: "http://",
// });

//sometimes, when we raise an event we also want to send some data about that event. it might be ID, URL (to acces a message) ect... If you want to send more than 1 argument(value), you can encapsulate that values inside an object, like {id: 1,url: "http://"}. This object called Event Arguments. we can pass in this eventArg/arg/e object into callback function, aka Listener

logger.log("test from logger class");
