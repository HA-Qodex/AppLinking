const express = require("express");
const path = require("path");
require("dotenv").config();
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";

app.use(
  express.static(path.join(__dirname, "public"), {
    dotfiles: "allow",
  })
);

app.get("/", (req, res) => {
  res.send("Backend for Android App Links");
});

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});
