const path = require('path')

const rootdir = require('../util/path')

const express = require('express');

const router = express.Router();

router.get("/contact-us", (req, res, next) => {

    res.sendFile(path.join(rootdir,'views','contactUs.html'));
  });
  router.post("/success", (req, res, next) => {
    console.log(req.body);
    res.redirect("/success");
  });

  module.exports = router;