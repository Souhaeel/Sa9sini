module.exports = (sequelize, DataTypes) => {
  const Answers = sequelize.define('Answers', {
    buyerUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sellerUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ProductsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AnswersDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    timestamps: false  // Disable timestamps if not needed
  });

  Answers.associate = function (models) {
    Answers.belongsTo(models.Users, {
      foreignKey: 'buyerUserId',
      as: 'B_users',  // Alias for buyer association
    });
    Answers.belongsTo(models.Users, {
      foreignKey: 'sellerUserId',
      as: 'S_users',  // Alias for seller association
    });
    Answers.belongsTo(models.Products, {
      foreignKey: 'ProductsId',
      as: 'Products',  // Alias for products association
    });
  };

  return Answers;
};