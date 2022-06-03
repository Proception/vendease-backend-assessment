const CONFIG = require('./src/config.ts')

const dotenv = require('dotenv');

dotenv.config();

console.log({})

module.exports = {
    development: {
        ...CONFIG.database,
    },
    test: {
        ...CONFIG.database,
    },
    production: {
        ...CONFIG.database,
    }
};
