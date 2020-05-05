const express = require("express");
const request = require("request");

const app = express();

const apiKey = "e561179c01f44c33a3ca65bb96eb383f";
const lat = 35.13385;
const long = -81.01888;
const days = 1;
let url = `https://api.breezometer.com/pollen/v2/forecast/daily?lat=${lat}&lon=${long}&key=${apiKey}&days=${days}&features=types_information,plants_information`;

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.post('/', (req, res) => {
//     request(url, (err, response, body) => {

//     })
// })

request(url, (err, response, body) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("body", body);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`This server is running on ${port}`);
});
