const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");
const logger = require("./utils/logger").getInstance();
const requestLog = require("./middleware/requestLog");
const {v4: uuidv4} = require("uuid");
const PORT = 8000;
const app = express();

// Middleware
app.use(requestLog);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Http server
const server = createServer(app);

// WebSocket configuration
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
});

app.get("/", (req, res) => {
  res.sendFile("views/welcome.html", { root: __dirname });
});

// Websocket connection
io.on("connection", (socket) => {
  const userId = uuidv4();
  socket.userId = userId;
  console.log(`User connected ${userId}`);
  
  socket.emit("assingId", userId);

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});


app.post("/notifications", (req, res) => {
  try {

    const userId = req.body.UserId;
    if (!userId){
      return res.status(400).json({message: "UserId is required"});
    }
    io.emit("meat", req.body);
    res.status(200).json({ message: "Notificación recibida correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Ha sucedido un error" });
    console.log(error)
  }
});

server.listen(PORT, () => {
  logger.log("info", "Server is running on port %s", PORT);
});
