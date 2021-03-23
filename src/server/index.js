const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const fetch = require("node-fetch");

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

app.post("/submittext", async (req, res) => {
  const { text } = req.body;
  console.log({ text });

  const apiURL = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${text}`;

  const response = await fetch(apiURL);
  try {
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// designates what port the app will listen to for incoming requests
app.listen(3001, () => console.log("Example app listening on port 3001!"));
