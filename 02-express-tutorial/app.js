const express = require('express');
const { people } = require('./data');
const PeopleRouter = require('./routes/people')
const AuthRouter = require('./routes/auth')
const app = express();

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/people',PeopleRouter)
app.use('/login',AuthRouter)

app.get('/', (req,res)=> {
    res.send('<h1>Home Page</h1><a href="/api/products">PRODUCT </a>')
})

app.get('/about', (req,res)=> {
    res.send('about page')
})
app.listen(5000, ()=> {
    console.log('server start')
})



