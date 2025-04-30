const express = require('express');
const {  books } = require('./database/connection');
const app = express();
require("./database/connection")
app.use(express.json())


app.get('/books',async function (req, res) {
    const datas = await books.findAll()

    res.json({
        message: 'books  fetched successfully',
        datas
    })
})


app.post('/books',async function (req, res) {
    console.log(req.body)
    const {bookName , bookPrice, bookAuthor, bookGenre} = req.body
    await books.create({
        bookName,
        bookPrice,
        bookAuthor,
        bookGenre

    })

    res.json({
        message: 'books  created successfully',
    })
})


app.delete('/books/:id', function (req, res) {
    res.json({
        message: 'books  deleted successfully',
    })
})

app.patch('/books/:id', function (req, res) {
    res.json({
        message: 'books  updated successfully',
    })
})





app.listen(3000,function(){
    console.log("server/backend/node started on port 3000");
})