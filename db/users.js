const client = require('./index')

const createUser = async ( {email_address, password, phone_number, customer_number} ) => {
    try{
        const { rows: [user] } = await client.query(`
            INSERT INTO users(email_address, password, phone_number, customer_number)
            VALUES ($1, $2, $3, $4)
            ON CONFLICT (email_address) DO NOTHING
            RETURNING *
        `, [email_address, password, phone_number, customer_number])
        return user;
    } catch(error){
        console.error('Error creating user', error)
    }
}

module.exports = {
    createUser
}