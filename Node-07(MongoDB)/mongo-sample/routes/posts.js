var express = require('express');
var router = express.Router();

const Post = require('../models/Post')

router.post('/add', function (req, res) {
 const post = new Post({
   title: req.body.title,
   isActive: req.body.isActive,
   comments: req.body.comments,
   meta: req.body.meta,
 });
 post.save((err,data)=>{
   if (err) {res.json(err);}
   else{ res.json(data);}  
 });
})

router.get('/Sorting', (req, res) => {
  Post.find({},'title isActive meta.favs',(err,datas)=>{
    res.json(datas);
  }).sort({'meta.favs': 'desc',title:1}); //=> 1, 'asc' , 'ascending || -1, 'desc', 'desending'
 
})

router.get('/Limit', (req, res) => {
  Post.find({},'title isActive meta.favs',(err,datas)=>{
    res.json(datas);
  }).skip(1).limit(2); 
})

router.get('/Skip', (req, res) => {
  Post.find({},'title isActive meta.favs',(err,datas)=>{
    res.json(datas);
  }).skip(2); 
})

router.get('/', (req, res) => {
  Post.find({},'title isActive',(err,datas)=>{
    res.json(datas);
  })
  // res.send('GET request to the postPage')
})

router.get('/isActive', (req, res) => {
  Post.find({isActive:true,title:'My new title.01'},(err,datas)=>{
    res.json(datas);
  })
})

router.put('/updateMany', (req, res) => {
  Post.updateMany({isActive:false,title:'My new title. 02'},{isActive:false, title:'Update mnay title'},(err,data)=>{
    res.json(data);
  })
})

router.put('/updateOne', (req, res) => {
  Post.updateOne({isActive:true},{isActive:false, title:'Update One title'},(err,data)=>{
    res.json(data);
  })
})

router.put('/updateById', (req, res) => {
  Post.findByIdAndUpdate('60291e1a71a52121907fa6b0',{isActive:false, title:'findByIdAndUpdate title'},(err,data)=>{
    res.json(data);
  })
})

router.delete('/deleteMany',(req,res)=>{
  Post.deleteMany({isActive:false})
  .then(function (data) { res.json(data); })
  .catch(function (err) { res.json(err); })
})

router.delete('/deleteOne',(req,res)=>{
  Post.deleteOne({isActive:true},(err,obj)=>{
    if (err) {res.json(err)}
    res.json(obj)
  })
})

router.delete('/findByIdAndRemove',(req,res)=>{
  var postId="60293a6a9c6d3b0b8c30e190";
  Post.findByIdAndRemove(postId,(err,post)=>{
    if (err) {res.json(err)}
    res.json("Removed Post:"+post)
  })
})

router.delete('/findByIdAndDelete',(req,res)=>{
  var postId="60293a6a9c6d3b0b8c30e190";
  Post.findByIdAndDelete(postId,(err,post)=>{
    if (err) {res.json(err)}
    res.json("Deleted Post:"+post)
  })
})

router.get('/searchBy', (req, res) => {
  Post.findOne({isActive:true},(err,datas)=>{
    res.json(datas);
  })
})

router.get('/searchById', (req, res) => {
  Post.findById('60291dcfff94f90db0cac43d',(err,datas)=>{
    res.json(datas);
  })
})


/* POST posts. */
router.post('/newpost', function(req, res, next) {
  const post = new Post({
    title: 'My new title.',
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