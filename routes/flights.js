var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');


/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new); 
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);


module.exports = router;
