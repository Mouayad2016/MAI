'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    // up: async(queryInterface, Sequelize) => {
    //     return queryInterface.addColumn('user', 'policy_accepted', Sequelize.BOOLEAN);
    // },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.removeColumn('user', 'policy_accepted');
    }
};