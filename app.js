const http = require("http");

const express = require("express");

//importing admin router
const adminRoutes = require('./routes/Admin')

//importing shop router
const shopRoutes = require('./routes/Shop')

//import body parser after (npm install --save body-parser)
const bodyParser = require("body-parser");

const app = express();

//body-parser is used before any routing middlewares
app.use(bodyParser.urlencoded({ extended: false }));


//using admin router here and sequence that they the router us used matters
app.use('/admin',adminRoutes);


//using shop router here
app.use(shopRoutes);

// adding a 404 page not found for random addresses which are not in the routes
app.use((req,res,next)=>{
    res.status(404).send('<h1>404 page not found</h1>')
})

const servers = http.createServer(app);

servers.listen(4000);
