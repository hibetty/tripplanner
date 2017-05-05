const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Place = dbConnection.define('place', {
  address : {
      type: Sequelize.STRING,
      allowNull : false

  },
  city : {
      type: Sequelize.STRING,
      allowNull :false
  },
  state : {
      type: Sequelize.STRING,
      allowNull : false

  },
  phone: {
      type : Sequelize.STRING,
      allowNull : false
  },
  location : {
      type: Sequelize.ARRAY(Sequelize.DOUBLE)
  }
});

module.exports = Place;