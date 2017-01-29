
'use strict';

const express = require('express');

const router = express.Router();

const knex = require('../knex');
//router.use(knex);

router.get('/', function(req,res,next){
  knex('classifieds').select('id', 'title', 'description', 'price', 'item_image')
  .then((results) => {
    console.log(results);
    res.send(results);
  }) .catch((err) =>{
    res.send('error getting classifieds');
  });
});


module.exports = router;
