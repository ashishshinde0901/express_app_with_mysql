const db = require("../db");
const route = require('express').Router()

route.get('/',(req, res)=>{
    db.getAllPersons().then((persons)=>{
        res.render('persons',{persons})
    })
        .catch((err)=>{
            res.send(err)

        })
})

route.get('/add',(req, res)=>{
    res.render('persons_add')
})

route.post('/add',(req, res)=>{
    db.addNewPersons(req.body.name,req.body.age,req.body.city).then(()=>{
        res.redirect('/pages')
    }).catch((err)=>{
        res.send(err)
    })
})

exports = module.exports = {
    route
}