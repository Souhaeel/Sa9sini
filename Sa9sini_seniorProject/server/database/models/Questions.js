module.exports = (sequelize, DataTypes) => {
    const Questions = sequelize.define('Questions', {
      Question: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      QuestionDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Like: {
        type: DataTypes.INTEGER,
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
    }, {
      timestamps: false,  // Disable timestamps if not needed
    });
  
    Questions.associate = function (models) {
      Questions.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'User',
      });
      Questions.hasMany(models.Answers, {
        foreignKey: 'questionId',
        as: 'Answers',
      });
      
    };
  
    return Questions;
  };
  