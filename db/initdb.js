const client = require('./index.js')

const dropTables = async () => {
    try{
        console.log('Dropping Tables')
        await client.query(`
            DROP TABLE IF EXISTS users
        `)
    } catch (error){
        console.error('There was an error dropping Tables', error)
    }
}

const createTables = async () => {
    try{   
        console.log('Creating Tables')
        await client.query(`
            CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email_address VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            phone_number VARCHAR(255),
            customer_number VARCHAR(255) UNIQUE NOT NULL
            );

        `);
    } catch (error){
        console.error('Error creating Tables', error)
    }
}
module.exports = {
    dropTables,
    createTables
}