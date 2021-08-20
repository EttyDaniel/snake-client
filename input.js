// Stores the active TCP connection object.
let connection;

//this function handles ctrl c key for terminating the game
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
    //console.log("move up");
  }
  if (key === 'a') {
    connection.write("Move: left");
    //console.log("move left");
  }
  if (key === 's') {
    connection.write("Move: down");
    //console.log("move down");
  }
  if (key === 'd') {
    connection.write("Move: right");
    //console.log("move right");
  }
};

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
 const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });

  return stdin;
};

module.exports = {setupInput};