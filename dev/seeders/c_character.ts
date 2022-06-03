'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Characters', [{
            firstName: 'Musa',
            lastName: 'Mai Shanu',
            status: 'ACTIVE',
            stateOfOrigin: 'Abuja',
            gender: 'MALE',
            location: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Characters', null, {});
    }
};
