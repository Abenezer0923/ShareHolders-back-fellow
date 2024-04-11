require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const connectDb = require("./config/db").connectDb;
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();

connectDb()
  .then((res) => console.log("connected"))
  .catch((e) => console.log(e));

let port = process.env.PORT || 5050;

// Enable CORS
app.use(cors());

// Parse JSON and URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Import and use API routes
const routeAPI = require("./Routes/index.js");
app.use("/api", routeAPI);

app.listen(port, () => console.log(`App listening on port ${port}!`));
