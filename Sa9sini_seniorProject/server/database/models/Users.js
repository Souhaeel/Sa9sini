module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {
    timestamps: false,  // Disable timestamps if not needed
  });

  Users.associate = function (models) {
    Users.hasMany(models.Questions, {
      foreignKey: 'userId',
      as: 'Questions',
    });
    Users.hasMany(models.Answers, {
      foreignKey: 'userId',
      as: 'Answers',
    });
  };

  return Users;
};
