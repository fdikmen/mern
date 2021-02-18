const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema(
    {
        name:{type:String,required:true},
        category:{type:String,required:true},
        score:{type:Number,default:0},
        views:{type:Number,default:0},
        isDelete:{type:Boolean,default:false}
    }
)

module.exports = mongoose.model('author',AuthorSchema)