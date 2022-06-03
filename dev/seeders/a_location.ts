'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Locations', [{
            name: 'sample location 1',
            latitude: 44.32058437100005,
            longitude: 12.627714476000051,
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                name: 'sample location 2',
                latitude: 5.103445730000033,
                longitude: 52.35018315600007,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'sample location 3',
                latitude: 41.32058437100005,
                longitude: 50.627714476000051,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'sample location 4',
                latitude: 19.32058437100005,
                longitude: 50.627714476000051,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'sample location 5',
                latitude: 46.32058437100005,
                longitude: 16.627714476000051,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Locations', null, {});
    }
};
