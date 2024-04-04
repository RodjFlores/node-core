const EventEmitter = require('events')

const customEmmiter = new EventEmitter()

customEmmiter.on('response', (dat)=>{
    console.log(`data receive ${JSON.stringify(dat)}`)
})

customEmmiter.on('response', (dat)=>{
    console.log(`${dat.test} TEST`)
})


customEmmiter.emit('response',{test:'test'})