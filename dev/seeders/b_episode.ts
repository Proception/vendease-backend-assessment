'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Episodes', [{
            name: 'Episode 1',
            code: 'code 1',
            releaseDate: new Date().toISOString(),
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                name: 'Episode 2',
                code: 'code 2',
                releaseDate: new Date().toISOString(),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Episodes', null, {});
    }
};
