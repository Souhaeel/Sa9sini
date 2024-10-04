'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Answers', 'questionId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Questions',
        key: 'id',
      },
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Answers', 'questionId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Questions',
        key: 'id',
      },
      onDelete: null,
    });
  },
};
