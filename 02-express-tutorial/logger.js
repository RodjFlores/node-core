function middleware(req,res,next){
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log('change')
    next()
}

module.exports = middleware


