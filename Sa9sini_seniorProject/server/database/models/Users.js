const { password } = require("../config/config");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    SellerOrBuyer:{
      type:DataTypes.STRING(),
      allowNull: false
    }
  },{
    timestamps: false  // Disable timestamps if not needed
  });

  Users.associate = function (models) {
    Users.hasMany(models.Products, {
      foreignKey: 'userId',
      as: 'products',
    });
  };


  return Users;
};