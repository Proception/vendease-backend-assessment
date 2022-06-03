'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('CharacterEpisodes', [{
            episodeId: 1,
            characterId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('CharacterEpisodes', null, {});
    }
};
