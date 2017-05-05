const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Hotel = dbConnection.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Hotel;

