module.exports = (sequelize, DataTypes) => {
    const Questions = sequelize.define('Questions', {

        Question: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        QuestionDate: {
            type: DataTypes.DATE,
            allowNull: false
        }

    },{
        timestamps: false  // Disable timestamps if not needed
      });

    Questions.associate = function (models) {
        Questions.belongsTo(models.Users, {
            foreignKey: 'userId',
            as: 'Users',
        });
    };
    

    return Questions;
};