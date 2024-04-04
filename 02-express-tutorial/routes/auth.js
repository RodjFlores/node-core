const express = require('express')
const router = express.Router()


router.post('/', (req,res)=>{
    console.log(req.body)
    const {name } = req.body
    console.log(name)
    res.send('posted')
})

module.exports = router