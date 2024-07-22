"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      type: DataTypes.STRING,
      venue: DataTypes.STRING,
      status: DataTypes.STRING,
      priority: DataTypes.STRING,
      dueDate: DataTypes.STRING,
      createdBy: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};
