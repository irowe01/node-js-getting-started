const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors())

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("pages/index"));

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post("/rides", urlencodedParser, function returnRides(req, res) {
  var username = req.body.username;
  var lat = req.body.lat;
  var lng = req.body.lng;

  if (!username || !lat || !lng) {
    return res.send({ error: "Whoops, something is wrong with your data!" });
  }

  var rides = [
    {
      _id: "5cdf411856e9c200042989d7",
      username: "JANET",
      lat: 42.354951,
      lng: -71.0509,
      created_at: "2019-05-17T23:17:44.427Z"
    },
    {
      _id: "5cf583aafbbfe80004456918",
      username: "mXfkjrFw",
      lat: 42.3453,
      lng: -71.0464,
      created_at: "2019-06-03T20:31:38.378Z"
    },
    {
      _id: "5cf583aafbbfe80004456919",
      username: "nZXB8ZHz",
      lat: 42.3662,
      lng: -71.0621,
      created_at: "2019-06-03T20:31:38.611Z"
    },
    {
      _id: "5cf583aafbbfe8000445691a",
      username: "Tkwu74WC",
      lat: 42.3603,
      lng: -71.0547,
      created_at: "2019-06-03T20:31:38.786Z"
    },
    {
      _id: "5cf583aafbbfe8000445691b",
      username: "5KWpnAJN",
      lat: 42.3472,
      lng: -71.0802,
      created_at: "2019-06-03T20:31:38.932Z"
    },
    {
      _id: "5cf583abfbbfe8000445691c",
      username: "uf5ZrXYw",
      lat: 42.3663,
      lng: -71.0544,
      created_at: "2019-06-03T20:31:39.077Z"
    },
    {
      _id: "5cf583acfbbfe8000445691d",
      username: "VMerzMH8",
      lat: 42.3542,
      lng: -71.0704,
      created_at: "2019-06-03T20:31:40.400Z"
    }
  ];
  return res.send(rides);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
