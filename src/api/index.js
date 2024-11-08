// api/index.js
const socket = new WebSocket('ws://localhost:8000/ws');

const connect = (cb) => {
  console.log("Connecting...");

  socket.onopen = () => {
    console.log("WebSocket connected successfully");
  };

  socket.onmessage = (msg) => {
    console.log("Message from WebSocket:", msg);
    cb(msg);
  };

  socket.onclose = (event) => {
    console.log("WebSocket connection closed:", event);
  };

  socket.onerror = (error) => {
    console.log("WebSocket error:", error);
  };
};

const sendMsg = (msg) => {
  console.log("Message sent: ", msg);
  socket.send(msg);
};

export { connect, sendMsg };
