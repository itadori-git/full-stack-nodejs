const { books } = require("../database/connection")

exports. fetchBooks = async function (req, res) {
    const datas = await books.findAll()

    res.json({
        message: 'books  fetched successfully',
        datas
    })
}

exports. addBook = async function (req, res) {
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
}

exports. deleteBook =function (req, res) {
    res.json({
        message: 'books  deleted successfully',
    })
}


exports.updateBook = function (req, res) {
    res.json({
        message: 'books  updated successfully',
    })
}


exports.singleFetchBook = async function(req, res){
    //first capture what id  he or she is sending
    const id = req.params.id
    const datas = await books.findByPk(id)// always return object
    // const datas = await books.findAll({where : id : id })//  datass always return array of object
    res.json({
        message: 'single books  fetched successfully',
        datas
    })
}