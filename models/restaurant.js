const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Restaurant = dbConnection.define('restaurant', {
  name : {
      type: Sequelize.STRING,
      allowNull : false
  },
  cuisine : {
      type: Sequelize.STRING
  },
  price :  {
    type: Sequelize.INTEGER,
    validate : {
      min: 1,
      max: 5
    }
  }
});

module.exports = Restaurant;