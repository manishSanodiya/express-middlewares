const http = require('http');

const express = require('express');
console.log('routes.someText');
const app = express();

app.use((req,res,next)=>{
    console.log("in the middleware")
    next()
})
app.use((req,res,next)=>{
    console.log("in the new middleware")
    res.send('<h1> hello to node js </h1>')
  
})

const servers = http.createServer(app);

servers.listen(4000)