const path = require('path');

const express = require('express');

//importing path to go to the root directory address
const rootdir = require('../util/path')


const router = express.Router()

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(rootdir,'views','add-product.html'))
  });
  
  router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  });

  module.exports = router;