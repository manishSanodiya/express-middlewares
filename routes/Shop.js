//import path core miodule for using html
const path = require('path')

const rootdir = require('../util/path')

const express = require('express');

const router = express.Router();

router.get("/", (req, res, next) => {

    res.sendFile(path.join(rootdir,'views','shop.html'));
  });

  module.exports = router;