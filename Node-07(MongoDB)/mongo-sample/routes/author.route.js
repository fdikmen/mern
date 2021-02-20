const express = require('express')
const router = express.Router()

const AuthorModel = require('../models/Author')

router.get('/findExists',function(req,res,next){
    AuthorModel.find({score:{$exists:false}},"name score views",(req,result)=>{res.json(result)});})

router.post('/add', function (req, res) {
    const author = new AuthorModel({
        name:req.body.name,
        category:req.body.category,
        score:req.body.score,
        views:req.body.views,
        isDelete:req.body.isDelete
    });
    author.save((err,data)=>{
        if(err) res.json(err);
        res.json(data);
    });
})

//Snippet =>node-express-get
//********** $match
router.get('/aggregate', (req, res) => {
    AuthorModel.aggregate([
        {
            $match:{isDelete:false}
        },
        /*{
            $group:{_id:"$category",totalCount:{$sum:1}}
        }*/
        {
            $project:{name:true,category:1,score:1}
        },
        {
            $sort:{score:-1}
        },
        {
            $limit:2
        },
        {
            $skip:1
        },
    ],(err,result)=>{
        if(err)res.json(err);
        res.json(result);
    });
  
})
const mongoose = require("mongoose")
router.get('/aggregate-lookup', function (req, res) {
  AuthorModel.aggregate([
      {$match:{_id:mongoose.Types.ObjectId("602e74f00c160f26a496a241")}  },
      {
        $lookup: {
            from: "books", 
            localField: "_id",
            foreignField: "authorId",
            as: "book",
          },
      },
      {$unwind:'$book'},
      {$project:{name:true,book:'$book.title'}}
    ],(req,result)=>{res.json(result)});

})

module.exports = router