'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    imageUrl: DataTypes.STRING,
    userId: DataTypes.NUMBER
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};