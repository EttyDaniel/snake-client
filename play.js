//This will serve as our main file through which we will launch the game client.

const net = require('net');
const {setupInput} = require('./input');
const  connect  = require('./client');

console.log('Connecting ...');
//connect();

setupInput(connect());