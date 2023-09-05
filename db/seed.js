const client = require('./index')
const { dropTables, createTables } = require('./initdb')
const { createUser } = require('./users')
const { createInquiry } = require('./inquiries')
const { createInquiryIssue } = require('./inquiryissues') 

const parrysArvada = {
    email_address: 'Teamarvada@parryspizza.com',
    password: 'parrys123',
    phone_number: '303-339-2576',
    customer_number: "074833"
}
const testInquiry = {
    creator: 1,
    issue: 1,
}
const issues = [
    {
        issue: 'Missing'
    },
    {
        issue: 'Miss Pick'
    },
    {
        issue: 'Damaged'
    }

]
const rebuildDB = async () => {
    await dropTables()
    await createTables()
    await createUser(parrysArvada)
    await Promise.all(issues.map(issue => createInquiryIssue(issue)))
    await createInquiry(testInquiry)
    
}

client.connect();
rebuildDB().catch(console.error).finally(() => client.end())