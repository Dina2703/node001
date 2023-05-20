const path = require("path");
const os = require("os");
const fs = require("fs");
const logger = require("./logger");

// function sayHi() {
//   console.log("Hello");
// }

// console.log(sayHi());
// console.log(logger);
// logger.log("some message");//when exported as an object
logger("heeloooo");

////////////
//Built-In Node Modules
//PATH module
const pathObj = path.parse(__filename);
console.log(pathObj); //gives => {
//   root: '/',
//   dir: '/Users/dinaraidrissova/Desktop/coding/NODEjs/node_001',
//   base: 'app.js',
//   ext: '.js',
//   name: 'app'
// }

//OS Module, object which has methods to work with a operating system
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log(`Total Memory:${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

//File System Module. object which has methods to work with a file system.All methods in this module comes in 2 forms: sync or blocking and async or non-blocking. In real-world applications ALWAYS work with async methods, non-block.
//example with sync / blocking
// const files = fs.readdirSync("./");
// console.log(files); //[ '.git', 'app.js', 'logger.js' ]

//example with async / non-block. We need to  define callback function to handle response, will get one of 2: error or data
const files = fs.readdir("./", (err, files) => {
  if (err) console.log("Error ", err);
  else console.log("Files ", files); //will get array of file names
});
