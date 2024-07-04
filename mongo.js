const { Client } = require('pg');

const dbConfig = {
    user: 'postgres',
    password: 'admin@123',
    // host: '193.123.95.122',
    host: 'localhost',
    port: '5432',
    database: 'postgres',
};

const client = new Client(dbConfig);

client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');


    })
    .catch((err) => {
        console.error('Error connecting to PostgreSQL database', err);
    });

module.exports = client;
