const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/UserDBex'
const app = express()




mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log('DB connected...')
})

app.listen(9000, () => {
    console.log('Server is listening on PORT:9000')
})

app.use(express.json())

const dataRouter = require('./routes/api')
app.use('/api', dataRouter)




