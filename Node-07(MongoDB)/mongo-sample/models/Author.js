const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema(
    {
        name:{type:String,required:true,
            maxLength:[15,'You can enter max {MAXLENGTH} characters in the `{PATH}` field.Entered Value:{VALUE}'],
        minLength:5
        },
        category:{type:String,required:true},
        score:{type:Number,default:0,min:0,max:100},
        views:{type:Number,default:0},
        isDelete:{type:Boolean,default:false}
    }
)

module.exports = mongoose.model('author',AuthorSchema)