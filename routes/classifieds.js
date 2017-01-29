
'use strict';

const express = require('express');

const router = express.Router();

const knex = require('knex');
router.use(knex);

router.get('/classifieds', function(req,res,next){
  knex.select('*').from('classifieds')
  .then((results) => {
    res.send(results);
  }) .catch((err) =>{
    res.send('error getting classifieds');
  });
});


module.exports = router;
