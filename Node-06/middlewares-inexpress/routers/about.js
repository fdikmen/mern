const express = require('express')

const router = express.Router();

router.get('/about',(req,res)=>{res.send("About Page... (From Get Method)")});
router.post('/about',(req,res)=>{res.send("About Page... (From Post Method)")});


module.exports = router;