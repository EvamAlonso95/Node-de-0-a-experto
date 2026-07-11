import { log } from "node:console";
import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function connection(ws) {
  console.log("Client connect");

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    // Enviamos la data recibida del cliente
    const payload = JSON.stringify({
      type: "custom-message",
      payload: data.toString(),
    });
    // ws.send(JSON.stringify(payload));

    //* Todos - incluyente (Broadcast)
    // wss.clients.forEach(function each(client) {
    //   if (client.readyState === WebSocket.OPEN) {
    //     client.send(payload, { binary: false });
    //   }
    // });

    //* Todos - excluyente (Broadcast)
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(payload, { binary: false });
      }
    });
  });

  //   ws.send("Hola desde el servidor");

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("Server running on port http://localhost:3000");
