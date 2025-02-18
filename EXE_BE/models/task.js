'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, TaskStatus }) {
      // define association here
      this.belongsTo(User, { foreignKey: "assignedTo" })
      this.belongsTo(User, { foreignKey: "createdBy" })
      this.belongsTo(TaskStatus, { foreignKey: "status" })
    }
  }
  Task.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    doneAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};