const dbConnection = require('./db');
const HotelModel = require('./hotel');
const ActivityModel = require('./activity');
const PlaceModel = require('./place');
const RestaurantModel = require('./restaurant');


HotelModel.belongsTo(PlaceModel);
RestaurantModel.belongsTo(PlaceModel);
ActivityModel.belongsTo(PlaceModel);

module.exports = {
  db: dbConnection,
  Hotel: HotelModel,
  Activity: ActivityModel,
  Place: PlaceModel,
  Restaurant: RestaurantModel
};