const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser',
    password: 'mypass'
})

connection.query(`create table if not exists persons(
        id integer auto_increment primary key,
        name varchar(40),
        age integer
)`,
    function (err, result, fields) {
    if(err){
        console.error(err)
    }else{
        console.log('table created successfully')
    }

    connection.close()
    }
    )