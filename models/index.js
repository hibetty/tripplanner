const dbConnection = require('./db');
const HotelModel = require('./hotel');


module.exports = {
  db: dbConnection,
  Hotel: HotelModel
};