var express = require('express');
var router = express.Router();

const Post = require('../models/Post')

/* POST posts. */
router.post('/newpost', function(req, res, next) {
  const post = new Post({
    title: 'My new title. 02',
    isActive:true,
    comments:[{message:'Good Job!'},{message:'Bad Job!'}],
    meta:{votes:54,favs:93}
  })
  post.save((err,data)=>{
    if(err) console.log(err);
    res.json(data)
  });
  // res.send('respond with a resource');
});

module.exports = router;
