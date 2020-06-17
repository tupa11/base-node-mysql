'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Book.associate = (models) => {
    // associations can be defined here
    Book.belongsTo(models.User, {foreignKey: 'user_id', as: 'owner'})
  };
  return Book;
};