module.exports = (sequelize, DataTypes) => {
  const Answers = sequelize.define('Answers', {
    Answer: {
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
        foreignKey: 'userId',  
        as: 'Users',           // Alias for users association
      });
      Answers.belongsTo(models.Questions, {
        foreignKey: 'questionId',  
        as: 'Questions',           // Alias for questions association
      });
    };
    
  
  
  return Answers;
};