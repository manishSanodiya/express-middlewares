const http = require("http");

const express = require("express");

//import body parser after (npm install --save body-parser)
const bodyParser = require("body-parser");

const app = express();

//body-parser is used before any routing middlewares
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/addProducts", (req, res, next) => {
  res.send(
    '<form action="/products" method="POST" ><input type="text" name="title"/><input type="text" name="disc"/><button type="submit">Add Products</button></form>'
  );
});

app.post("/products", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1> hello to node js </h1>");
});

const servers = http.createServer(app);

servers.listen(4000);
