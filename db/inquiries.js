const client = require('./index')

const createInquiry = async ({ creator, issue }) => {
    try{
        const { rows: [inquiry] } = await client.query(`
            INSERT INTO inquiries (creator, issue)
            VALUES ($1, $2)
            RETURNING *
            ;
        `, [creator, issue])
        return inquiry
    } catch(error){
        console.error('Error creating inquiry', error)
    }
}
module.exports = {
    createInquiry
}