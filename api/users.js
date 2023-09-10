const express = require('express')
const userRouter = express.Router()
const { getUserByEmail, verifyUser } = require('./db/index.js')

userRouter.post('/login', async (req, res, next) => {
    const { email_address, password } = req.body
    try{
        const user = await getUserByEmail(email_address)
        if(user){
            if(await verifyUser(email_address, password)){
                res.send({
                    message: 'Thank you for logging in!'
                })
            }else{
                res.send({
                    name: 'IncorrectUserNameorPassword',
                    message: 'Username or Password is Incorrect'
                })
            }
        } else{
            res.send({
                name: 'IncorrectUserName',
                message: "Username or Password is incorrect"
            })
        }
    } catch(error){
        console.error('Error logging in', error)
    }
})