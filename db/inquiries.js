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
const getAllInquiries = async () => {
    try{
    const { rows:  allInquries } = await client.query(`
        SELECT *
        FROM inquiries
        ;
    `)
    return allInquries
    } catch(error){
        console.error('Error getting all inquiries')
    }
}
const getCreatorsInquiries = async (creator) => {
    try{
        const { rows: creatorsInquiries } = await client.query(`
            Select *
            FROM inquiries
            WHERE creator = $1
            ;
        `, [creator])
        return creatorsInquiries
    } catch(error){
        console.error('Error getting a certain creators inquiries')
    }
}
module.exports = {
    createInquiry
}