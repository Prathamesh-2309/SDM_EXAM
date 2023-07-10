const express = require('express')
const app = express()
const cors = require('cors')
const con = require('./db')
const { response } = require('express')
const { Console } = require('console')

app.use(cors('*'))
app.use(express.json())

app.get('/', (resquest, response) => {
    let query = 'select * from book_tb'

    con.query(query, (err, result) => {
        console.log(result)
        response.send(result)

    })
})

app.post('/', (resquest, response) => {

    var data = resquest.body;
    console.log(data)

    let query = `INSERT INTO book_tb VALUES (${data.id},'${data.bname}','${data.btype}','${data.price}','${data.pubDate}','${data.language}')`;

    con.query(query, (err, result) => {

        console.log(query)
        console.log(result)

        response.send(result)

    })
})

app.put('/:id', (resquest, response) => {

    

    let query = `UPDATE book_tb set price=${resquest.body.price},language='${resquest.body.language}' where id=${resquest.params.id}`;

    con.query(query,(err, result) => {

        console.log(query)
        console.log(result)

        response.send(result)

    })
})

app.listen(8003, () => {
    console.log("Server started @ 8001")
})