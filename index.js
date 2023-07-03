// Import required modules
const qrcode = require("qrcode-terminal");
const express = require("express");
const { Client, LocalAuth } = require("whatsapp-web.js");

// Initialize the client
const client = new Client({
  authStrategy: new LocalAuth(),
});

// Set up the express server
const app = express();
const port = process.env.PORT || 8888;

// Set up the login for the client
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

// Set up the routes
app.get("/send-message", async (req, res) => {
  const { number, message } = req.query;

  const number_details = await client.getNumberId(number);

  try {
    client.sendMessage(number_details._serialized, message);

    res.send("Message sent!");
  } catch (error) {
    res.send(error);
  }
});

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
