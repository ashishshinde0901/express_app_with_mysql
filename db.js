const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password:'mypass',
    database:'mytestdb'
})

function getAllPersons(){
    return new Promise(function (resolve, reject){
        connection.query(
            `select * from persons`,
            function(err,rows,cols){
                if(err){
                    reject(err)
                } else{
                    resolve(rows)
                }
            }
        )
    })
}

function addNewPersons(name,age,city){
    return new Promise(function (resolve, reject){
        connection.query(
            `insert into persons(name,age,city) values(?,?,?)`,
            [name,age,city],
            function(err, result){
                if(err){
                    reject(err)
                } else{
                    resolve()
                }
            }
        )
    })
}

exports = module.exports = {
    getAllPersons,
    addNewPersons
}
