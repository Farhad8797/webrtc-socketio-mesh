import express from "express";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import { Server } from "socket.io";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log(`Socket connected: ${socket.id}`);

  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    const existingSockets = Array.from(
      io.sockets.adapter.rooms.get(roomId),
    ).filter((id) => id !== socket.id);

    socket.emit("existing-peers", existingSockets);
    socket.to(roomId).emit("user-joined", socket.id);
  });

  socket.on("offer", ({ target, offer }) => {
    io.to(target).emit("offer", offer);
  });

  socket.on("answer", ({ target, answer }) => {
    io.to(target).emit("answer", answer);
  });

  socket.on("ice-candidate", ({ target, ice_candidates }) => {
    io.to(target).emit("ice-candidate", ice_candidates);
  });

  socket.on("disconnecting", () => {
    socket.rooms.forEach((rooms) => {
      socket.to(rooms).emit("user left", socket.id);
    });
  });
});

server.listen(3000, () => console.log("Listening to port: 3000"));
