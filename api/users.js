const express = require('express')
const userRouter = express.Router()
const jwt = require('jsonwebtoken')
require('dotenv').config()
const { getUserByEmail, verifyUser } = require('../db/users.js')

userRouter.post('/login', async (req, res, next) => {
    const { email_address, password } = req.body
    try{
        const user = await getUserByEmail(email_address)
        if(user){
            if(await verifyUser(email_address, password)){
                const token = jwt.sign(user, process.env.JWT_SECRET, {
                    expiresIn: '1w'
                })
                res.send({
                    token,
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
                message: "Username or password is incorrect"
            })
        }
    } catch(error){
        console.error('Error logging in', error)
    }
})
module.exports = userRouter