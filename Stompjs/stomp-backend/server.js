const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 61613});

console.log("WebSocket server running on ws://localhost:61613");

wss.on("connection", socket => {
    socket.on("message", data => {
        // Echo back whatever comes in
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});
