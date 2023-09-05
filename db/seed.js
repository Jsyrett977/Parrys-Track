const client = require('./index')
const { dropTables, createTables } = require('./initdb')
const { createUser } = require('./users')

const parrysArvada = {
    email_address: 'Teamarvada@parryspizza.com',
    password: 'parrys123',
    phone_number: '303-339-2576',
    customer_number: '074833'
}

const rebuildDB = async () => {
    await dropTables()
    await createTables()
    await createUser(parrysArvada)
}

client.connect();
rebuildDB().catch(console.error).finally(() => client.end())