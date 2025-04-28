const express = require('express');
const app = express();
require("./database/connection")


app.get('/books', function (req, res) {
    res.json({
        message: 'books  fetched successfully',
    })
})


app.post('/books', function (req, res) {
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