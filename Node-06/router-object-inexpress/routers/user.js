const express = require('express')
const router = express.Router()

router.get('/user',(req,res)=>{res.send("User Page... (From Get Method)")});
router.post('/user',(req,res)=>{res.send("User Page... (From Post Method)")});


module.exports = router;