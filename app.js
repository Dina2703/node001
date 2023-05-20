const path = require("path");
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
