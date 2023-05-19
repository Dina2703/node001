function log(message) {
  console.log(message + " module func");
}

// module.exports.log = log;//exported as an object
module.exports = log; //exported as a function
