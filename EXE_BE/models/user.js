'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ promotion, training_detail }) {
      // define association here
      this.hasMany(promotion, { foreignKey: "create_by" })
      this.belongsToMany(training_detail, { through: 'training_detail', foreignKey: 'user_id' });

    }
  }
  user.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    date_of_birth: DataTypes.DATE,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};