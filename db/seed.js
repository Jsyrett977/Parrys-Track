const client = require('./index')
const { dropTables, createTables } = require('./initdb')
const { createUser } = require('./users')
const { createInquiry } = require('./inquiries')

const parrysArvada = {
    email_address: 'Teamarvada@parryspizza.com',
    password: 'parrys123',
    phone_number: '303-339-2576',
    customer_number: "074833"
}
const testInquiry = {
    creator: 1,
    issue: 'Missing'
}
const rebuildDB = async () => {
    await dropTables()
    await createTables()
    await createUser(parrysArvada)
    await createInquiry(testInquiry)
}

client.connect();
rebuildDB().catch(console.error).finally(() => client.end())