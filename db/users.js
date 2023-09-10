const client = require('./index')
const bcrypt = require('bcrypt')

const createUser = async ( {email_address, password, phone_number, customer_number} ) => {
    const cryptedPassword = await bcrypt.hash(password, 10)
    try{
        const { rows: [user] } = await client.query(`
            INSERT INTO users(email_address, password, phone_number, customer_number)
            VALUES ($1, $2, $3, $4)
            ON CONFLICT (email_address) DO NOTHING
            RETURNING *
        `, [email_address, cryptedPassword, phone_number, customer_number])
        return user;
    } catch(error){
        console.error('Error creating user', error)
    }
}
const getUserByEmail = async (email_address) => {
    try{
        const { rows: [user] } = await client.query(`
            SELECT *
            FROM users
            WHERE email_address = $1
            ;
        `, [email_address])
        return user;
    } catch(error){
        console.error('Error getting user by Email')
    }
}
const verifyUser = async (email_address, password) => {
    try{
        const {rows: [userPassword] } = await client.query(`
            SELECT password
            FROM users
            WHERE email_address = $1
            ;
        `, [email_address])
        return await bcrypt.compare(password, userPassword.password)
    } catch(error){
        console.error('login was not successful')
    }
}
module.exports = {
    createUser,
    getUserByEmail,
    verifyUser
}