const WebSocket = require('ws');

// Create a WebSocket object
const ws = new WebSocket('ws://example.com/socket');

// Event listener for connection open
ws.on('open', () => {
    console.log('WebSocket connection established');
});

// Event listener for receiving messages
ws.on('message', (message) => {
    console.log('Received:', message);
});

// Event listener for connection close
ws.on('close', () => {
    console.log('WebSocket connection closed');
});

// Event listener for errors
ws.on('error', (error) => {
    console.error('WebSocket error:', error);
});