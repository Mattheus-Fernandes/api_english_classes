const Sequelize = require("sequelize")
const connection = require("../database/index")

const Class = connection.connection.define("class", {
  student: {
    type: Sequelize.STRING,
    allowNull: false
  },
  language: {
    type: Sequelize.STRING,
    allowNull: false
  },
  unit: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hour: {
    type: Sequelize.STRING,
    allowNull: false
  }
})


Class.sync({force: false})
  .then(() => {})

module.exports = Class