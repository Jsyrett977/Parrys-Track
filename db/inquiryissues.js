const client = require('./index')

const createInquiryIssue = async ({issue}) => {
    try{
        const {rows: [inquiryIssue]} = await client.query(`
            INSERT INTO inquiry_issues (issue_type)
            VALUES ($1)
            RETURNING *
            ;
        `, [issue])
        return inquiryIssue;
    } catch(error){
        console.error('Error creating Inquiry Issue', error)
    }
}

module.exports = {
    createInquiryIssue
}