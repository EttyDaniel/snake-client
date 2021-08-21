const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host:IP,
    port:PORT
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
    }, 1500);
    
  });
  //receives a message from the server and presents it on the screen
  conn.on('data', (data) => {
    console.log('Server says: ', data);

    // In case the server informs that we've crashed we close the
    // connection on our end as well to avoid sending data after
    // the socket has been closed
    if (data.includes("you crashed"))
    {
      conn.end();
      process.exit();
    }
  });

  // end the connection and exit the process when dealing with an error event
  conn.on('error', (error) => {
    console.log('Server error: ', error)
    conn.end();
    process.exit();
  })

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}
module.exports = connect;