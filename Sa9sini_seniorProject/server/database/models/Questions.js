module.exports = (sequelize, DataTypes) => {
    const Questions = sequelize.define('Questions', {
      Question: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM,
        values: ['General', 'Technology', 'Science', 'Health', 'Entertainment'],
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
      isLiked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
      timestamps: false,
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
  