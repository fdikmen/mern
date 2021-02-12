const express = require('express');
const { nextTick } = require('process');
const router = express.Router()
//helpers
const isAuth = require('../helpers/isAuth')

router.get('/user',isAuth,(req,res)=>{res.send("User Page... (From Get Method)")});
router.post('/user',(req,res,next)=>{
    const user=false;
    if (user) {
        res.send("User Page... (From Post Method)")
    } else {
        return next({status:404,message:'This user was not found!'})
    }
    });


module.exports = router;