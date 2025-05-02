const { fetchBooks, addBook, deleteBook, updateBook, singleFetchBook } = require("../controllers/book.controller")

const router = require("express").Router()

router.route("/").get(fetchBooks).post(addBook)
router.route("/:id").delete(deleteBook).patch(updateBook).get(singleFetchBook)

module.exports = router