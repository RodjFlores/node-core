const express = require('express')
const router = express.Router()
const {people} = require('../data')
router.get('/' , (req,res)=>{
    console.log(people)
    res.status(200).json({success:true,data:people})
})

router.post('/' , (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name'})
    }
    console.log(req.body)
    res.status(201).json({success:true,person:name})
})

module.exports = router