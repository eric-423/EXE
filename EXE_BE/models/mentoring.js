'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mentoring extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ training }) {
      // define association here
      this.belongsTo(training, { foreignKey: "training_id" })
    }
  }
  mentoring.init({
    mentoring_name: DataTypes.STRING,
    mentoring_content: DataTypes.STRING,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mentoring',
  });
  return mentoring;
};