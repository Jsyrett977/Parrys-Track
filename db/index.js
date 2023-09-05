const { Client } = require('pg')

const DATABASE_URL = 'postgres://localhost:5432/Parrys-Track'
const client =  new Client({
    connectionString: DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? {rejectUnauthorized: false} : undefined,
})

module.exports = client