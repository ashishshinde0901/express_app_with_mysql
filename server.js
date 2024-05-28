const express = require('express')
const app = express()
const db = require('./db')
const path = require('path')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine","hbs")
app.set('views','views')

app.use('/pages',require('./routes/pages').route)
app.use('/api',require('./routes/api').route)
app.use('/',express.static(path.join(__dirname,'public_html')))

app.listen(3333,()=>{
    console.log("server started on http://localhost:3333/")
})
