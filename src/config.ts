const env = process.env.NODE_ENV || "local";

const config = (() => {
    switch (env) {
        case "production":
            return {
                app: {
                    port: 8080
                },
                database: {
                    url: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5436/vendease-backend',
                    dialect: process.env.PROD_DIALECT
                }
            };
        case "test":
            return {
                app: {
                    port: 8081
                },
                database: {
                    username: process.env.DB_USER_TEST || 'test',
                    password: process.env.DB_PASSWORD_TEST || 'test',
                    database: process.env.DB_NAME_TEST || 'vendease-backend-test',
                    host: process.env.DB_HOST || 'localhost',
                    dialect: 'postgres',
                    port: process.env.DB_PORT || 5436
                }
            };
        case "local":
            return {
                app: {
                    port: 8080
                },
                database: {
                    username: process.env.DB_USER || 'postgres',
                    password: process.env.DB_PASSWORD || 'postgres',
                    database: process.env.DB_NAME || 'vendease-backend',
                    host: process.env.DB_HOST || 'localhost',
                    dialect: 'postgres',
                    port: process.env.DB_PORT || 5432,
                    url: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/vendease-backend',
                }
            };
        default:
            return {
                app: {
                    port: 8080
                },
                database: {
                    username: 'postgres',
                    password: 'postgres',
                    database: 'vendease-backend',
                    host: 'localhost',
                    dialect: 'postgres',
                    port: 5436
                }
            };
    }
})();

module.exports = config;