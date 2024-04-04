const {readFile,writeFile} = require('fs');

readFile('./content/first.txt','utf8',   (err,res)=> {
    if(err){
        console.log(err)
        return
    }
    
    readFile('./content/second.json','utf8', (err,res) => {
        if(err){
            console.log(err)
            return
        }
        const second = res

        writeFile('./content/async.txt',`ASYNC --- ${second}`, (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log('FINISHED')
        })
    })
})

console.log('End of Files')