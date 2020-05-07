const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const apiKey = process.env.APIKEY;
const lat = 35.13385;
const long = -81.01888;
const days = 3;
let url = `https://api.breezometer.com/pollen/v2/forecast/daily?lat=${lat}&lon=${long}&key=${apiKey}&days=${days}`;

app.get("/", (req, res) => {
  request(url, (err, response, body) => {
    if (err) {
      res.render("index", { data: null, error: "Error please try again" });
    } else {
      let { data, error } = JSON.parse(body);
      console.log(body);
      if (data.length === 0) {
        res.render("index", {
          data: null,
          error: "Sorry there was no data to return here",
        });
      } else {
        const types = Object.values(data[2].types);
        res.render("index", { data: types, error: null });
      }
    }
  });
});

// <!-- short hand to output <%=-->

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`This server is running on ${port}`);
});
