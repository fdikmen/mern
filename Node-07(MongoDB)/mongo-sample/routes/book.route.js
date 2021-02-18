const express = require('express')
const router = express.Router()

const BookModel = require('../models/Book')

router.get('/',function(req,res,next){res.json('Book List....')})

/**POST Methos */
router.post("/add", function (req, res, next) {
    const book = new BookModel({
      name: req.body.name,    authorId: req.body.authorId,
      isbn: req.body.isbn,    title: req.body.title,
      subtitle: req.body.subtitle,    coAuthor: req.body.coAuthor,
      published: req.body.published,    publisher: req.body.publisher,
      pages: req.body.pages,    description: req.body.description,
      website: req.body.website,  });
    book.save((err, data) => {
      if (err) {      res.json(err);    }
      res.json(data);
    });
  });

module.exports = router