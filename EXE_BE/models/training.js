'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class training extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ mentoring, training_detail }) {
      // define association here
      this.hasMany(mentoring, { foreignKey: "training_id" })
      this.belongsToMany(training_detail, { through: "training_detail", foreignKey: "training_id" })
    }
  }
  training.init({
    training_name: DataTypes.STRING,
    note: DataTypes.STRING,
    training_result: DataTypes.STRING,
    point: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'training',
  });
  return training;
};