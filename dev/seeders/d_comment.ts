'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Comments', [{
            comment: 'Excellent movie',
            ipAddressLocation: '127.0.0.1',
            episodeId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Comments', null, {});
    }
};
