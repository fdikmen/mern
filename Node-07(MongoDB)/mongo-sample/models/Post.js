const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title:{type:String,required:true,unique:true},
    // isActive:Boolean,
    isActive:{type:Boolean,default:true},
    comments:[{message:String}],
    meta:{
        votes:Number,
        favs:Number
    },
    createdDate:{type:Date,default:Date.now}
})

module.exports = mongoose.model('post',PostSchema)