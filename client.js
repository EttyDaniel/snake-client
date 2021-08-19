const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541

  });

  conn.on('connect', () => {
    //sucessfully connecting to the server
    console.log("Successfully connected to game server");
  });

  conn.on('connect', () => {
    //sending the server our name - 3 letters max
    conn.write('Name: EBD');
    setInterval(() => {
      conn.write('Move: up');
    }, 50);
    
  });
  //receives a message from the server and presents it on the screen
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}
module.exports = connect;