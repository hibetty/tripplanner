const router = require('express').Router();
const Hotel = require('../models').Hotel;
const Restaurant = require('../models').Restaurant;
const Activity = require('../models').Activity;

router.get('/', function(req, res, next) {
  var hotels = Hotel.findAll().catch(next)
  // .then(allHotels => {
  //   //console.log(hotels)
  //   res.render('index', {hotels: allHotels});
  // }).catch(next)

  var restaurants = Restaurant.findAll().catch(next)
  var activities = Activity.findAll().catch(next)
  Promise.all([hotels, restaurants, activities]).then(function(results) {
    var hotels = results[0];
    var restaurants = results[1];
    var activities = results[2];
    res.render('index', {hotels : hotels, restaurants : restaurants, activities : activities});
  })
  
})

module.exports = router;