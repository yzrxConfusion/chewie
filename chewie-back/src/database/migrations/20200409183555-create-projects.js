'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('projects', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        client_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        start: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        end: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        value: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        meeting_room_id: {
          type: Sequelize.INTEGER,
          references: { model: 'meeting_rooms', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        },
        responsible: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        comments: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        canceled_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },

      });
  },

  down: (queryInterface) => {
      return queryInterface.dropTable('projects');
  }
};
