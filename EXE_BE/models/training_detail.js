'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class training_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user, training }) {
      // define association here
      this.belongsTo(user, { foreignKey: 'user_id' });
      this.belongsTo(training, { foreignKey: 'training_id' });
    }
  }
  training_detail.init({
    title: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    comment: DataTypes.STRING,
    completion_date: DataTypes.DATE,
    result: DataTypes.INTEGER,
    attempt_time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'training_detail',
  });
  return training_detail;
};