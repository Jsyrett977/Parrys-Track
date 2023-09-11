const express = require('express')
const router = express.Router();
const userRouter = require('./users')
router.get('/', (req, res, next) => {
    res.send({
        message: "Welcome"
    })
})
router.use('/users', userRouter )
module.exports = router