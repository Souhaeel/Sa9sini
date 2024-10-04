module.exports = (sequelize, DataTypes) => {
  const Answers = sequelize.define('Answers', {
    Answer: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    AnswersDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Questions',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  }, {
    timestamps: false,  // Disable timestamps if not needed
  });

  Answers.associate = function (models) {
    Answers.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'User',
    });
    Answers.belongsTo(models.Questions, {
      foreignKey: 'questionId',
      as: 'Question',
    });
  };

  return Answers;
};
