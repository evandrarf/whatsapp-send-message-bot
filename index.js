// Import required modules
const qrcode = require("qrcode-terminal");
const express = require("express");
const { Client, LocalAuth } = require("whatsapp-web.js");
const { sendMessageGet, sendMessagePost } = require("./controller.js");

// Initialize the client
const client = new Client({
  authStrategy: new LocalAuth(),
});

// Set up the express server
const app = express();
const port = process.env.PORT || 8888;

const bodyParser = require("body-parser");

// Set up the login for the client
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up the routes
app.get("/send-message", (req, res) => sendMessageGet(req, res, client));
app.post("/send-message", (req, res) => sendMessagePost(req, res, client));

// Set up the client
client.on("ready", async () => {
  console.log("Client is ready!");

  // Start the server
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});

// Initialize the client
client.initialize();
