require("dotenv").config(); // this is important!
module.exports = {
    development: {
        dialect: process.env.DEVELOPMENT_DIALECT,
        storage: process.env.DEVELOPMENT_STORAGE,
    },
    production: {
        username: process.env.PRODUCTION_DATA_BASE_USERNAME,
        password: process.env.PRODUCTION_DATA_BASE_PASSWORD,
        database: process.env.PRODUCTION_DATABASE,
        host: "dpg-ci5s0hp8g3n4q9trfujg-a",
        port: 5432,
        dialect: "postgres",
    },
};