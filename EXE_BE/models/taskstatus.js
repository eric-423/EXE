'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TaskStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Task }) {
      // define association here
      this.belongsTo(Task, { foreignKey: "status" })
    }
  }
  TaskStatus.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TaskStatus',
  });
  return TaskStatus;
};