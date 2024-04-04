function authorize(req,res,next){
    console.log(req)
    const {user} = req.query
    if(user){
        console.log('u are authorize')
        next()
    }else{
        console.log('NOT AUTH!!')
        res.send('NOT AUTH!')
    }
}

module.exports = authorize