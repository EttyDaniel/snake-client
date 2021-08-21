// Stores the active TCP connection object.
let connection;

//this function handles ctrl c key for terminating the game
const handleUserInput = function(key) {
  switch(key) {
    case '\u0003':
      process.exit();
      break;
    case 'w':
      connection.write("Move: up");
      break;
    case 'a':
      connection.write("Move: left");
      break;
    case 's':
      connection.write("Move: down");
      break;
    case 'd':
      connection.write("Move: right");
      break;
    case 't':
      connection.write("Say: Hello World");
      break;
    case 'y':
      connection.write("Say: I am a cat");
      break;
    default:
      break;
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