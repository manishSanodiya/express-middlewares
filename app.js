const http = require("http");

const path = require('path')

const express = require("express");

const contact = require('./routes/contact')
const success = require('./routes/success')

//importing admin router
const adminRoutes = require('./routes/Admin')

//importing shop router
const shopRoutes = require('./routes/Shop')

//import body parser after (npm install --save body-parser)
const bodyParser = require("body-parser");

const app = express();

//for using css we need a static file
app.use(express.static(path.join(__dirname,'public')))

//body-parser is used before any routing middlewares
app.use(bodyParser.urlencoded({ extended: false }));


//using admin router here and sequence that they the router us used matters
app.use('/admin',adminRoutes);


//using shop router here
app.use(shopRoutes);

app.use(contact);
app.use(success);

// adding a 404 page not found for random addresses which are not in the routes
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

const servers = http.createServer(app);

servers.listen(4000);
